
//1.length()-It count the total lenth of the array
const friends = ["Sau", "Harshu", "Oggy"]
console.log(friends)
console.log(friends.length);

//2.push()-insert the element at last of the array
const friend = ["saurabh", "Yogita", "Harshada"]
console.log(friend)
console.log(friend.push("Oggy"))

//3.pop()-delete the element at the end of the array
const frnd = ['Hiii', 'Hellloo', 'Heyy'];
console.log(frnd);
console.log(frnd.pop());

//4.unshift()-insert the element at the start of the array
const students = ["rony", "Bony", "Candy", "Dany"]
console.log(students)
students.unshift("E")
console.log(students)



//5.shift()-delete the element at the start of the array
const student2 = ["mona", "Bittu", "Cat", "Dog"]
console.log(student2)
student2.shift()
console.log(student2)


//6.join()-join the two strings with , but we can change it
const stud2 = ["mona's", "Bittu's", "Cats", "monkey"]
console.log(stud2)
console.log(stud2.join())


//7.indexOf()-check the index of element which is given
const stud3 = ["mona's", "Bittu's", "Cats", "monkey"]
console.log(stud3)
console.log(stud3.indexOf("Cats"))

//8.splice()-it is used to insert and delete the element at a time
const grp = ["X", "Y", "Z", "W"]
console.log(grp);
grp.splice(1, 2, "n", "m");
console.log(grp)

const students1 = ["A", "B", "C", "D", "E", "F"]
console.log(students1)
students1.splice(1, 2, "W", "Q")
console.log(students1)

//9.reverse()-it is used to reverse the array

const group = ["X", "Y", "Z", "W"]
console.log(group);
group.reverse();
console.log(group)


//10.sort()-it is use to sort array in ascending order
const student20 = ["Z", "P", "F", "A"]
console.log(student20);
const x = student20.sort();
console.log(x)





