
let data =     {
    summary: 'python operators',
    title: 'Python operators',
    searchKeywords:`

    `,
    cathegory: 'python',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Operators in python'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
                },



                {
                    elementType:'Headline-3',
                    content:'Arithmetic operators'
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Operator', 'Usage','Description'
                    ],
                    content: [

                        {
                            [Symbol('title')]:'Modulus',
                            [Symbol('code')]:`
                            <div class="note note-danger">Python</div>
<pre>
10 % 3 is 1 # True
10 % -3 is -2 # True
-10 % 3 is 3 # True
-10 % -3 is -1 # True

</pre>
                            <div class="note note-danger">JS</div>
<pre>
10 % 3 === 1 // true
10 % -3 === 1 // true
-10 % 3 === 1 // true
-10 % -3 === -1 // true
</pre>                      
                    <div class="note note-danger">The difference is, that in JS % is the <code>rest</code> operator, and
                    in Python this is called a <code>modulus</code> operator. The difference is in handling negative numbers
                    </div>
                            `,
                            Operator: '<code>%</code>',
                            Usage: 'a % b',
                            Description: `
                            a modulus b
                            `,
                        },



                {
                    [Symbol('title')]:'Floor division',
                    [Symbol('code')]:`
                <pre>
10 // 3 is 3 # True                
                </pre>
                    `,
                    Operator: '<code>//</code>',
                    Usage: 'a // b',
                    Description: `
                    Floor division
                    `,
                },
            ]
        },







                {
                    elementType:'Headline-3',
                    content:'Assignment operators'
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Operator', 'Usage','Description'
                    ],
                    content: [

                        {
                            [Symbol('title')]:'Add assign',
                            [Symbol('code')]:`
                            <pre>
a = 3;
a += 5;
# now a is 8
                            </pre>
                            `,
                            Operator: '<code>+=</code>',
                            Usage: 'a += b',
                            Description: `
                            Adds b to a, and assigns the result to a
                            `,
                        },
                    ]
                },




                {
                    elementType:'Headline-3',
                    content:'Comparision operators'
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Operator', 'Usage','Description'
                    ],
                    content: [

                        {
                            [Symbol('title')]:'Equals',
                            [Symbol('code')]:`
5 == 5 # True
4 == 5 # False
1 == True # True
'' == True # False
'' == False # False
<div class='note note-danger'>Below in JS would be different</div>
[1,2]==[1,2] # True 
{'a':4}=={'a':4} # True
'string' == 'string' # True
(1,2) == [1,2] # False
                            `,
                            Operator: '<code>==</code>',
                            Usage: 'a == b',
                            Description: `
                            a equals b
                            `,
                        },

                        {
                            [Symbol('title')]:'Greater than',
                            [Symbol('code')]:`
                            <pre>
6 > 5 # True
4 > 5 # False
2 > True # True
1 > True # False
'' == True # Error - not capable of copmaring a string and a boolean in this way
[1,2]==[1,2] # True
{'a':4}=={'a':4} # True
'string' == 'string' # True
(1,2) == [1,2] # False
</pre>
<div class="note note-danger">Below works the same way as in JS. However NOT with a == operator</div>
<pre>
ARRAYS: 
[1, 2] > [1, 1] # True
[1, 0] > [1, 1] # False
[1, 0] > [0, 1] # True
# So like 10 > 01

'aa' < 'bb' # True
['aa', 2] < ['ab',2] # True

</pre>
                            `,
                            Operator: '<code>></code>',
                            Usage: 'a > b',
                            Description: `
                            a is greater than b
                            `,
                        },



                    ]
                },





                {
                    elementType:'Headline-3',
                    content:'Logical operators'
                },



                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Operator', 'Usage','Description'
                    ],
                    content: [

                        {
                            [Symbol('title')]:'not',
                            [Symbol('code')]:`
                            <ul>
                            <li>not True is False</li>
                            <li>not False is True</li>
                            </ul>
                            `,
                            Operator: '<code>not</code>',
                            Usage: 'not y',
                            Description: `
                            A logical operator negating the left-side operand
                            `,
                        },


                        {
                            [Symbol('title')]:'and',
                            [Symbol('code')]:`
                            <ul>
                            <li>True  and True is True</li>
                            <li>True  and False is False</li>
                            <li>False and True is False</li>
                            <li>False and False is False</li>
                            </ul>
                            <pre>
test=False
def check_test_side_effect():
	test = not test
	return True

print(False and check_test_side_effect()) # False, the check_test_side_effect is not triggered
print(test) # False

                            </pre>
                            `,
                            Operator: '<code>and</code>',
                            Usage: 'x and y',
                            Description: `
                            A logical AND operator, a shortcircuit one, like in JS. If the first operand determines the result, 
                            then the second one is not evaluated and if there is a sideeffect in it, it will not happen
                            `,
                        },


                        {
                            [Symbol('title')]:'or',
                            [Symbol('code')]:`
                            <ul>
                            <li>True or True is True</li>
                            <li>True or False is True</li>
                            <li>False or True is True</li>
                            <li>False or False is False</li>
                            </ul>
                            <pre>
test=False
def check_test_side_effect():
	test = not test
	return True

print(True or check_test_side_effect()) # True, the check_test_side_effect is not triggered
print(test) # False

                            </pre>
                            `,
                            Operator: '<code>or</code>',
                            Usage: 'x or y',
                            Description: `
                            A logical OR operator, a shortcircuit one, like in JS. If the first operand determines the result, 
                            then the second one is not evaluated and if there is a sideeffect in it, it will not happen
                            `,
                        },


                    ]
                },




                {
                    elementType:'Headline-3',
                    content:'Membership and identity operators'
                },


                {
                    elementType: 'ConditionalArray',
                    headItems: [
                        'Operator', 'Usage','Description'
                    ],
                    content: [
                        {
                            [Symbol('title')]:'in',
                            [Symbol('code')]:`
                            <pre>
dict = {
	'a': 5, 
	'b': 6, 
	'c': 7, 
	'd': {
		'a': 8, 
		'x': 0
	}
}
print( 'a' in dict)  # True

5 in [4, 5, 6] # True
5 in (5, 6, 7) # True
'bit' in 'Betty bought a bit of bitter' # True
5 in {5, 6, 7} # True

                            </pre>
                            `,
                            Operator: '<code>in</code>',
                            Usage: 'x in y',
                            Description: 'True if y contains x. May be used for arrays, sets, tuples, frozensets, dictionaries, strings',
                        },


                        {
                            [Symbol('title')]:'not in',
                            [Symbol('code')]:`
                            <pre>
dict = {
	'a': 5, 
	'b': 6, 
	'c': 7, 
	'd': {
		'a': 8, 
		'x': 0
	}
}
print( 'a' not in dict)  # False

5 not in [4, 5, 6] # False
3 not in (5, 6, 7) # True
'elephant' not in 'Betty bought a bit of bitter' # True
5 not in {5, 6, 7} # False

                            </pre>
                            `,
                            Operator: '<code>not in</code>',
                            Usage: 'x not in y',
                            Description: `True if y does not contains x. 
                            May be used for arrays, sets, tuples, frozensets, dictionaries, strings`,
                        },



                        {
                            [Symbol('title')]:'is',
                            [Symbol('code')]:`
                            <pre>
g = {'a': 4, 'b':6}
h = {'a': 4, 'b':6}

g is h # False, not the same objects

a = 5
b = 5
a is b # True

{1,2} is {1,2} # False
                            </pre>
                            `,
                            Operator: '<code>is</code>',
                            Usage: 'x is y',
                            Description: `True if y is the same object x. 
                            Behaves in a different way in case 'primitive' objects and 'non primitive' objects 
                            are compared`,
                        },


                        {
                            [Symbol('title')]:'is not',
                            [Symbol('code')]:`
                            <pre>
g = {'a': 4, 'b':6}
h = {'a': 4, 'b':6}

g is h # True, not the same objects

a = 5
b = 5
a is not b # False
                            </pre>
                            `,
                            Operator: '<code>is not</code>',
                            Usage: 'x is not y',
                            Description: `Check if x is a different obejct than y`,
                        },


                    ]
                },




            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:''
                },
                {
                    elementType:'Paragraph',
                    content:`

                    `
                },
            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'References'
                },
                {
                    elementType:'Link',
                    content:'w3schools',
                    href: 'https://www.w3schools.com/python/python_operators.asp',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getOperatorsPythonData(){
    return data;
}