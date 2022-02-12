
let data =     {
    summary: 'jasmine matchers',
    title: 'Jasmine matchers',
    searchKeywords:`
    expect toBe toEqual toBeCloseTo toBeDefined toBeFalsy toBeGreaterThan toBeGreaterThanOrEqual toBeLessThan
    toBeLessOrEqual toBeNaN toBeNegativeInfinity toBeNull toBePositiveInfinity toBeTruthy toBeUndefined toContain(expected) 
    toHaveBeenCalled toHaveBeenCalledBefore(expected) goHaveBeenCalledTimes toHaveBeenCalledWhith toMatch toThrow(expected)
    toThrowError(expected, message) custom matchers fail asymetricMatch any
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Matchers'
                },

                {
                    elementType: 'UnsignedList',
                    content: [
                        `<code>toBe(expect)</code>: the same as <code>===</code>, to be used on primitives,
                        if used on objects references would be compared, and if objects have the same keys and
                        values false would be returned,`,
                        `<code>toEqual(expect)</code>: compared objects deeply. Not lookin only on the 
                        references, but rather on keys and values. On primitives the same effect as <code>toBe</code>`,
                        `<code>toBeCloseTo(expect, precision)</code>: 
                        <ul>
                        <li><code>expected</code>: is the value to that is expected</li>
                        <li><code>precision</code>: a number indicating the number of decimal points to check</li>
                        </ul>
                        <code>expect(2.123456).toBeCloseTo(2.1238, 3)</code> would pass,
                        `,
                        `<code>toBeDefined()</code>: fails if the result is undefined,`,
                        `<code>toBeUndefined()</code>`,
                        `<code>toBeFalsy()</code> pass if result after conversion to boolean gives false,`,
                        `<code>toBeTruthy()</code>: pass if result after conversion to boolean gives true,`,
                        `<code>toBeGreaterThan(expect)</code>`,
                        `<code>toBeGreaterOrEqual(expect)</code>`,
                        `<code>toBeLessThan(expect)</code>`,
                        `<code>toBeLessOrEqual(expect)</code>`,
                        `<code>toBeNaN(expect)</code>: pass if expected is NaN`,
                        `<code>toBeNegativeInfinity()</code>`,
                        `<code>toBePositiveInfinity()</code>`,
                        `<code>toBeNull()</code>`,
                        `<code>toContain(expect)</code> supports:
                        <ul>
                            <li>arrays</li>,<li>strings, capable of matching a substring</li>,
                            <li>sets</li>
                        </ul>
                        Does not support objects or Maps
                        `,
                        `<code>toHaveBeenCalled()</code> <code>expect(aSpy).toHaveBeenCalled()</code>:
                        passes if the spy was called`,
                        `<code>toHaveBeenCalledBefore(spyB)</code>: <code>expect(spyA).toHaveBeenCalledBefore(spyB)</code>,
                        pass if spyA was called before spyB`,
                        `<code>toHaveBeenCalledTimes(expect)</code> checks if a spy was called expected number of times,`,
                        `<code>toHaveBeenCalledWith(repetable)</code>: 
                        <code>expect(spy).toHaveBeenCalledWith('arg1', 5, true)</code>: repetable is a set of arguments that 
                        is expected,`,
                        `<code>toMatch(regExp)</code> test against the regular expression,`,
                        `<code>toThrow(expect)</code>: expect is an optional value to be thrown. If not provided 
                        the fact that something was thrown is good enough,`,
                        `<code>toThrowError(expect, message)</code>: 
                        <ul>
                        <li><code>expected</code> an optional error name,</li>
                        <li><code>message</code> string or regExp that is set with an error,</li>
                        </ul>
                        `,
                    ]
                },

            ]
        },
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline-2',
                    content:'Custom matchers'
                },
                {
                    elementType:'Paragraph',
                    content:`
                        A <code>custom matchers</code> factory is an object returning functions, that are custom matchers.
                        A custom matcher is a function taking a <code>matchersUtil</code> object, and returning an 
                        object, that has a <code>compare</code> function. Than compare function takes

                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>actual</code> the arguemant that is taken by the <code>expect</code> function
                         that will be chained with the matcher,`,
                        `<code>expected</code>: an argument taken by the custom matcher,`,
                    ]
                },
                {
                    elementType:'Paragraph',
                    content:`
                    and returns the <code>result</code> object, having keys:
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>pass</code>: the boolean value, that if true then the test will be passed, and if false,
                        then the test will fail,`,
                        `<code>message</code>: a string, that will be displayed. Should be different for the 
                        pass and fail scenario. If absent, then will be factorized by the framework,`,
                    ]
                },

                {
                    elementType:'SmallHeadline',
                    content:`
                        MatchersUtil
                    `
                },
                {
                    elementType:'Paragraph',
                    content:`
                        An object with utils to be used in custom matchers
                    `
                },
                {
                    elementType:'UnsignedList',
                    content:[
                        `<code>contains(searchIn, searchFor)</code>: boolean if searchFor was in searchIn`,
                        `<code>equals(a, b)</code>: boolean if both values are deeply equal,`,
                        `<code>pp(msg)</code>: pretty-print: a formatter returning a string that may be used 
                        on the failure.`,
                    ]
                },
                {
                    elementType:'Code',
                    content:`
<pre>
var customMatchers = {
    toBeEqualExpectedPlus2: function(matchersUtil){
        return {
            compare: function(actual, expected){
                var result = {};
                result.pass = (matchersUtil.equals(actual + 2, expected))
                if (result.pass)  result.message="Passed"
                else result.message="Failed"
                return result
            }
        }
    },
    toContainKey: function(matchersUtil){
        return {
            compare: function(actual, expected){
                var result = {};
                let keys = Object.getOwnPropertyNames(actual)
                result.pass = matcherUtil.contains(keys, expected)
                
                return result;
                // message does not have to be set, 
                // if not set will be fabricated
            }

        }
    }
}
</pre>                    
            <div class="note">Usage in tests</div>
<pre>
describe("Custom matchers example", ()=>{
    beforeEach(()=>{
        jasmine.addMatchers(customMatchers)
    })
    it('Should be 4', (){
        expect(2).toBeEqualExpectedPlus2(4);
    })
    it('Should have a key', ()=>{
        expect({a: 'val'}).toContainKey('a')
    })
})
</pre>            
                    `
                },

                {
                    elementType: 'Headline-3',
                    content:'<code>fail(cause)</code>'
                },
                {
                    elementType: 'Paragraph',
                    content:`Is for manual failing test cases`
                },

                {
                    elementType: 'Headline-3',
                    content:'<code>any(constructorName)</code>'
                },
                {
                    elementType: 'Paragraph',
                    content:`Returns true if the function was called with the constructor name`
                },
                {
                    elementType: 'Code',
                    content:`
<pre>

it('Should pass', function(){
    let aSpy = jasmine.createSpy('aSpy');
    aSpy(4, 'caption');
    expect(aSpy).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(String))
})
</pre>                    
                    `
                },


                {
                    elementType: 'Headline-3',
                    content:'Asymetric match'
                },
                {
                    elementType: 'Paragraph',
                    content:`If there is a need to know if compared objects are only in sam part equal.`
                },
                {
                    elementType: 'Code',
                    content:`
<pre>
describe('Asymetric match', ()=>{
    var has3 = {
        asymmetricMatch: function(actual){
            actual.includes(3);
        }
    }
    it('Should match', function(){
        expect([1,2,3]).toEqual(has3);
    })    
})
</pre>                    
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
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/api/2.7/matchers.html',
                    description:'Matchers'
                },
                {
                    elementType:'Link',
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/tutorials/custom_matcher',
                    description:'Custom matchers'
                },
                {
                    elementType:'Link',
                    content:'jasmine.github.io',
                    href: 'https://jasmine.github.io/api/edge/MatchersUtil.html',
                    description:'Custom matchers'
                },
            ]
        }
    ]
};

export default function getMatchersData(){
    return data;
}
