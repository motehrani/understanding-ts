let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "max";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
  // while (true) {}
}

// line 12??

generateError("an error occurred!", 500);
