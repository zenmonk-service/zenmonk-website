declare module "odometer" {
    export default class Odometer {
      constructor(options: {
        el: HTMLElement;
        value?: number;
        theme?: string;
        format?: string;
        duration?: number;
      });
  
      update(newValue: number): void;
      render(): void;
    }
  }
  