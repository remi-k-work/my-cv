// types
type TypeWriterAction = () => Promise<void>;
type ActionCallback = (resolve: () => void, reject: () => void) => void;
type OnFinished = () => void;

export default class TypeWriter {
  private currentContent: string = "";
  private readonly actionsQueue: TypeWriterAction[] = [];

  constructor(
    private readonly shouldLoop: boolean = false,
    private readonly typingSpeed: number = 50,
    private readonly deletingSpeed: number = 50,
    private readonly onFinished: OnFinished,
  ) {
    this.shouldLoop = shouldLoop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
    this.onFinished = onFinished;
  }

  typeFullText(fullText: string) {
    const words = fullText.split(" ");

    for (const word of words) {
      // Simulate making a typo
      const typo = this.makeTypo(word, 0.03);
      if (word === typo) {
        this.typeWord(word + " ").pauseFor(Math.random() * 100);
      } else {
        this.typeWord(typo + " ").pauseFor(Math.random() * 250);
        this.deleteChars(typo.length + 1);
        this.typeWord(word + " ").pauseFor(Math.random() * 100);
      }
    }

    return this;
  }

  typeWord(text: string) {
    this.addNewAction(async (resolve) => {
      for (let i = 0; i < text.length; i++) {
        this.currentContent += text[i];
        await this.delay(this.getRandomInt(this.typingSpeed));
      }
      resolve();
    });

    return this;
  }

  deleteChars(howMany: number) {
    this.addNewAction(async (resolve) => {
      for (let i = 0; i < howMany; i++) {
        this.currentContent = this.currentContent.substring(0, this.currentContent.length - 1);
        await this.delay(this.getRandomInt(this.deletingSpeed));
      }
      resolve();
    });

    return this;
  }

  deleteAll(deleteSpeed: number = this.deletingSpeed) {
    this.addNewAction(async (resolve) => {
      while (this.currentContent.length > 0) {
        this.currentContent = this.currentContent.substring(0, this.currentContent.length - 1);
        await this.delay(this.getRandomInt(deleteSpeed));
      }
      resolve();
    });

    return this;
  }

  pauseFor(duration: number) {
    this.addNewAction((resolve) => {
      setTimeout(resolve, duration);
    });

    return this;
  }

  async start() {
    let actionCallback = this.actionsQueue.shift();
    while (actionCallback) {
      await actionCallback();
      if (this.shouldLoop) this.actionsQueue.push(actionCallback);
      actionCallback = this.actionsQueue.shift();
    }

    this.onFinished();

    return this;
  }

  public get typedContent(): string {
    return this.currentContent;
  }

  private makeTypo(text: string, typoProbability: number) {
    // Loop through each character in the text
    let result = "";
    for (const char of text) {
      // Randomly decide if a typo will occur
      if (Math.random() < typoProbability) {
        // Simulate different typo types
        const randomAction = Math.random();
        if (randomAction < 0.33) {
          // Swap characters (adjacent only)
          result += char === text[text.length - 1] ? char : text[text.indexOf(char) + 1];
        } else if (randomAction < 0.66) {
          // Miss a character
          continue;
        } else {
          // Insert a random character
          result += char + String.fromCharCode(Math.floor(Math.random() * 26) + 97);
        }
      } else {
        // Add the original character if no typo
        result += char;
      }
    }
    return result;
  }

  private addNewAction(actionCallback: ActionCallback): void {
    this.actionsQueue.push(() => new Promise<void>(actionCallback));
  }

  // Add a delay for a certain time in milliseconds
  private async delay(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }

  private getRandomInt(max: number) {
    // Create a range that strictly excludes 0, even if it means slightly slower performance due to the loop
    let randomInt: number;
    do {
      randomInt = Math.floor(Math.random() * max);
    } while (randomInt === 0);
    return randomInt;
  }
}
