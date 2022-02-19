
let data =     {
    summary: 'python data types',
    title: 'Python data types',
    searchKeywords:`

    `,
    cathegory: 'python',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Data types in python'
                },

                {
                    elementType: 'Headline-3',
                    content: `Variables`
                },
                {
                    elementType: 'UnsignedList',
                    content: [
                        `No declaration needed,`,
                        `If a varaible named the same way exists in global and local scope, the local scope variable 
                        shadows the global scope one,`,
                        `If global scope variable is referred in the local scope (no assignment), then the global scope variable
                        is available in the local scope,`,
                        `Names of variables in python can contain letters, digits and underscore,`,
                        `Names of variables may not start with a digit, only letter or underscore are alowed,`,
                        `Python distinguishes capital and non capital letters, so <code>alpha</code> and <code>Alpha</code> would
                        be different variables,`,
                        `To refer to the global scope from the function the <code>global</code> keyword may be used,`
                    ]
                },
                {
                    elementType: 'Code',
                    content: `
                    <pre>
a = 5
b = 4
def funct():
    a = 6
    print(a) # will be 6 as is shadowed,
    print(b) # will be 4, as global
                    </pre>
                    `
                }

            ]
        },


        {
            elementType: 'ConditionalArray',
            headItems: [
                'Name', 'Shortcut','Sort', 'Mutability','Example'
            ],
            content: [
                {
                    [Symbol('title')]:'String',
                    [Symbol('code')]:`
str = 'some caption';
str2 = "some caption";

if (str[1] == 'o'):
    print('Taking a single letter')

print(str[-1]) # 'n'
print(str[5:]) # caption
print(str[5:10]) # captio
print(str[-11:-6]) # some

# This multiline string will be divided into separate lines with \a \n
multiline = """I am a multiline string
                I can be in a few lines""";

# Below strings are just long strings without any division to 
# lines
long1 = 'I am a multiline string "with a quote"'\
             'I can be in a few lines'

long2 = ("This is a multiline string"
              "May be in a few lines"
             )             

# MUTABILITY
str = 'some str'
a1 = id(str)
str = "some other value"
a2 = id(str)
print(a1 == a2) # False

str[3] = 6; // error

print(len(str))
for i in str:
    print(i);
    //loopin possible

let str = 'linux is for free'
if ('free' in tst):
   print('String may be searched with an in operaotr')

if ('is not' not in str):
   print('not in may be used with strings')



// With id comparation one may tell if the type is mutable or not
                    `,
                    Name: 'String',
                    Shortcut: '<code>str</code>',
                    Mutability: 'Non mutable',
                    Example: `<code>'some caption'</code>`,
                    Sort:'Numeric type'
                },

                {
                    [Symbol('title')]:'String',
                    [Symbol('code')]:`
A numeric type

a = 5
id(a)
a = 3
id(a)

b = a + 'str' # TypeError, cannot add numeric to a string
                    `,
                    Name: 'Integer',
                    Shortcut: '<code>int</code>',
                    Mutability: 'Non mutable',
                    Example: `<code>3</code>`,
                    Sort:'Numeric type'
                },

                {
                    [Symbol('title')]:'Float',
                    [Symbol('code')]:`
A numeric type

a = 5.3
id1 = id(a)
a = 3.0
id2 = id(a)
print(id1 == id2) # False

b = a + 'str' # TypeError, cannot add numeric to a string
                    `,
                    Name: 'Float',
                    Shortcut: '<code>float</code>',
                    Mutability: 'Non mutable',
                    Example: `<code>3.0</code>`,
                    Sort:'Numeric type'
                },

                {
                    [Symbol('title')]:'Complex',
                    [Symbol('code')]:`
A numeric type

a = 5j
id1 = id(a)
a = 3j
id2 = id(a)
print(id1 == id2) # False

type(c) # <class 'int'>
                    `,
                    Name: 'Complex',
                    Shortcut: '<code>complex</code>',
                    Mutability: 'Non mutable',
                    Example: `<code>3.0</code>`,
                    Sort:'Numeric type'
                },


                {
                    [Symbol('title')]:'Sequence type',
                    [Symbol('code')]:`
l = ['str', 32]
id1 = id(l)
l = [33, 3]
id2 = id(l)
print(id2 == id1) # False, as the whole new value was assigned

l[0] = 4
print(id2 == id(l)) # True, as only a certain index was changed


                    `,
                    Name: 'List',
                    Shortcut: '<code>list</code>',
                    Mutability: 'mutable',
                    Example: `<code>[</code>`,
                    Sort:'Sequence type'
                },


                {
                    [Symbol('title')]:'Sequence type',
                    [Symbol('code')]:`

                    

t = ('string', 33, 54)
id1 = id(t)
t = (4, 'str')
id2 = id(t)
print(id1 == id2) # False as whole variable was assigned a new value
t[0] = 3 # error, tuple immutable



                    `,
                    Name: 'Tuple',
                    Shortcut: '<code>tuple</code>',
                    Mutability: 'immutable',
                    Example: `<code>(4, 'ds')/code>`,
                    Sort:'Sequence type'
                },


                {
                    [Symbol('title')]:'range',
                    [Symbol('code')]:`
r = range(3)
 # 0, 1, 2
x = range(2, 8)
 # 2, 3, 4, 5, 6, 7
y = range(2, 10, 2)
 # 2, 4, 6, 8
z = range(20, 1)
 # Nothing
 z = range(5, 1, -1)
 # 5, 4, 3, 2

 Probably not mutable, as setting a new range value will change the variable

                    `,
                    Name: 'Range',
                    Shortcut: '<code>range</code>',
                    Mutability: '?',
                    Example: `<code>range(4)</code>`,
                    Sort:'Sequence type'
                },

                {
                    [Symbol('title')]:'Set',
                    [Symbol('code')]:`
{'val1', 3, 5j}


                    `,
                    Name: 'Set',
                    Shortcut: '<code>set</code>',
                    Mutability: 'mutable',
                    Example: `<code>{'val1', 3, 5j}</code>`,
                    Sort:'Set type'
                },

                {
                    [Symbol('title')]:'Dictionary',
                    [Symbol('code')]:`
o = {name: 'Andrzej', familyName: 'Kmicic'}
o[name] = 'Antoni'
                    `,
                    Name: 'Dictionary',
                    Shortcut: '<code>dict</code>',
                    Mutability: 'mutable',
                    Example: `<code>{'val1', 3, 5j}</code>`,
                    Sort:'Map type'
                },


                {
                    [Symbol('title')]:'Frozenset type',
                    [Symbol('code')]:`
f = frozenset({4, 5, 'val'})                    
                    `,
                    Name: 'Set',
                    Shortcut: '<code>frozenset</code>',
                    Mutability: 'immutable',
                    Example: `<code>frozenset{'val1', 3, 5j}</code>`,
                    Sort:'Set type'
                },


                {
                    [Symbol('title')]:'Boolean',
                    [Symbol('code')]:`
True
False      
                    `,
                    Name: 'Boolean',
                    Shortcut: '<code>bol</code>',
                    Mutability: 'immutable',
                    Example: `<code>True</code>`,
                    Sort:'Set type'
                },


                {
                    [Symbol('title')]:'Bytes',
                    [Symbol('code')]:`

                    b"casted to byte"   

                    `,
                    Name: 'Bytes',
                    Shortcut: '<code>bytes</code>',
                    Mutability: 'immutable',
                    Example: `<code>b"casted to byte"</code>`,
                    Sort:'binary type'
                },

                {
                    [Symbol('title')]:'Bytearray',
                    [Symbol('code')]:`

x=bytearray(5)                    
                    
                    `,
                    Name: 'Bytearray',
                    Shortcut: '<code>bytearray</code>',
                    Mutability: 'mutable',
                    Example: `<code>bytearray(5)</code>`,
                    Sort:'binary type'
                },

                {
                    [Symbol('title')]:'Memoryview',
                    [Symbol('code')]:`

x=memoryview(bytes(5))
                    
                    `,
                    Name: 'Memoryview',
                    Shortcut: '<code>memoryview</code>',
                    Mutability: '>',
                    Example: `<code>x=memoryview(bytes(5))</code>`,
                    Sort:'binary type'
                },


            ]
        },



        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-3',
                    content:'Casting'
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        '<code>int(v)</code> conversion to int',
                        '<code>str(v)</code> conversion to string',
                        '<code>float(v)</code> conversion to float',
                        '<code>hex(v)</code> conversion to a string representation of hexadecimal',
                        '<code>oct(v)</code> conversion to a string representation of hexadecimal',
                    ]

                    
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
                    content:'Developer mozilla',
                    href: ' ',
                    description:'Tutorial'
                },
            ]
        }
    ]
};

export default function getDataTypesPythonData(){
    return data;
}