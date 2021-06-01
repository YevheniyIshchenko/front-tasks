export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@mail.com' },
    { name: 'Anna', age: 17, email: 'example@mail.com' },
  ],
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ email, name }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};

console.log(event.getInvitations());
