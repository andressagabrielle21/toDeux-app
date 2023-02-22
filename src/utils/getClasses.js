export const getClasses = (classes) =>
  classes
    .filter((item) => item !== '') // Creates a copy of an array with the filtered elements of this certain array that passed this test
    .join(' ') // Creates a space, or whatever you want, between the elements of an array
    .trim(); // Removes the white space from the ends of a string
