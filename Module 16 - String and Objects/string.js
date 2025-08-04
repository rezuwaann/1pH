const country = "bangladesh"
const division = 'Sylhet'
const district = `sylhet`
const thana = new String('jalalabad')

console.log(typeof thana)

const cnt = "     bangladesh           "
console.log(cnt.trim())

if (country.toLowerCase() === cnt.trim().toLowerCase()) {
    console.log("Both are same")
} else { console.log("Both are not same") }

const address='Tilagor';

//from index 0 to 3
console.log(address.slice(0,4))

const sentence="i am a good boy and hardworking person"
console.log(sentence.split(' '))
console.log(sentence.split('a'))

const friend="hi,hello,what,why,hehe"
console.log(friend.split(','))

console.log(friend.includes('hi'))

const str=['hi', 'hello', 'what', 'why', 'hehe' ]
console.log(str.join())
console.log(str.join('|'))
console.log(str.join('-'))
console.log(str.join('_'))


//reverse string

const str2="I am learning web dev"
let reverse=""

for(const letter of str2){
    reverse=letter+reverse;

}
console.log(reverse)


// covert to array then reverse
const rev=str2.split('').reverse().join('')
console.log(rev)