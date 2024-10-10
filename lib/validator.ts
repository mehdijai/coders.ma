export class Validator {
  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhoneNumber(phoneNumber: string): boolean {
    const moroccoPhoneRegex = /^(?:\+212|0)([5-7]\d{8})$/;

    return moroccoPhoneRegex.test(phoneNumber);
  }

  static validateMinLength(input: string, minLength: number): boolean {
    return input.length >= minLength;
  }
}
