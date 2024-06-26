// other libraries
import animationInterval from "./animationInterval";

// types
type TypeWriterAction = () => Promise<void>;
type ActionCallback = (resolve: () => void, reject: () => void) => void;
type OnChanged = (typedText: string) => void;
type OnFinished = () => void;

export default class TypeWriter {
  private hasStarted: boolean = false;
  private readonly actionsQueue: TypeWriterAction[] = [];
  private typedText: string = "";

  constructor(
    private readonly shouldLoop: boolean = false,
    private readonly typingSpeed: number = 50,
    private readonly deletingSpeed: number = 50,
    private readonly onChanged: OnChanged,
    private readonly onFinished: OnFinished,
    private readonly abortSignal: AbortSignal,
  ) {}

  typeFullText(fullText: string) {
    const words = fullText.split(" ");

    for (const word of words) {
      // Simulate making a typo
      const typo = this.makeTypo(word, 0.03);
      if (word === typo) {
        this.typeWord(word + " ").pauseFor(this.getRandomInt(10, 100));
      } else {
        this.typeWord(typo + " ").pauseFor(this.getRandomInt(10, 250));
        this.deleteChars(typo.length + 1);
        this.typeWord(word + " ").pauseFor(this.getRandomInt(10, 100));
      }
    }

    return this;
  }

  typeWord(word: string) {
    this.addNewAction((resolve) => {
      let i = 0;
      const controller = new AbortController();
      animationInterval(this.getRandomInt(10, this.typingSpeed), controller.signal, () => {
        this.typedText += word[i];
        this.onChanged(this.typedText);
        i++;
        if (i >= word.length) {
          controller.abort();
          resolve();
        }
      });
    });

    return this;
  }

  deleteChars(howMany: number) {
    this.addNewAction((resolve) => {
      let i = 0;
      const controller = new AbortController();
      animationInterval(this.getRandomInt(10, this.deletingSpeed), controller.signal, () => {
        this.typedText = this.typedText.substring(0, this.typedText.length - 1);
        this.onChanged(this.typedText);
        i++;
        if (i >= howMany) {
          controller.abort();
          resolve();
        }
      });
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
    // If the action queue for this instance has already begun, do not start another one
    if (this.hasStarted) {
      return;
    }
    this.hasStarted = true;

    let actionCallback = this.actionsQueue.shift();
    while (actionCallback) {
      if (this.abortSignal.aborted) {
        return this;
      }

      await actionCallback();
      if (this.shouldLoop) this.actionsQueue.push(actionCallback);
      actionCallback = this.actionsQueue.shift();
    }

    this.onFinished();

    return this;
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

  private getRandomInt(min: number, max: number) {
    // Use Math.random to get a decimal between 0 (inclusive) and 1 (exclusive)
    const randomDecimal = Math.random();

    // Calculate the range (max - min + 1) to include both min and max
    const range = max - min + 1;

    // Floor the random number and scale it to the range, then add min for the desired range
    return Math.floor(randomDecimal * range) + min;
  }
}
