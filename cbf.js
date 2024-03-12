const friend = "BRUTUS"
const shiftValue = 3;
const latAlph = "abcdefghijklmnopqrstuvwxyz";
const firstLetter = friend[0];
const index = latAlph.indexOf(firstLetter.toLowerCase());
//Question 1: The first character in the name is counted as 1, even if B is the 2nd letter of the alphabet. Since JavaScript is zero-indexed, so the number 0 is used to access the first value of a string.//
friend.indexOf("B");
const newIndex = index + shiftValue;
const encryptedFirstLetter = latAlph[newIndex];
//Question 2: If we continue shifting letters and go beyond the last letter, "z", the modulus operator (%) can help us to wrap around and continue from the beginning of the alphabet. Once I try to find an index that is outside the scope of the alphabet, the modulus operator will make sure that the result of the index will start from 0. //
const latAlphLength = latAlph.length;
const newIndex = (index + shiftValue) % latAlphLength;
const encryptedFirstLetter = latAlph[newIndex];
const encryptMessage = "EUXWXV";
const teaseMessage = encryptMessage.slice(0, 3);