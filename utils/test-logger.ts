export class TestLogger {
  constructor(private readonly testName: string) {}

  step(message: string): void {
    console.log(`[${this.testName}] STEP: ${message}`);
  }

  info(message: string): void {
    console.log(`[${this.testName}] INFO: ${message}`);
  }

  error(message: string): void {
    console.error(`[${this.testName}] ERROR: ${message}`);
  }
}
