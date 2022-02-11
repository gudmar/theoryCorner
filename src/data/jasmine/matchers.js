
let data =     {
    summary: 'jasmine getting started',
    title: 'Jasmine, getting started',
    searchKeywords:`
    expect toBe toEqual toBeCloseTo toBeDefined toBeFalsy toBeGreaterThan toBeGreaterThanOrEqual toBeLessThan
    toBeLessOrEqual toBeNaN toBeNegativeInfinity toBeNull toBePositiveInfinity toBeTruthy toBeUndefined toContain(expected) 
    toHaveBeenCalled toHaveBeenCalledBefore(expected) goHaveBeenCalledTimes toHaveBeenCalledWhith toMatch toThrow(expected)
    toThrowError(expected, message) custom matchers
    `,
    cathegory: 'jasmine',
    content: [
        {
            elementType:'Article',
            content:[
                {
                    elementType:'Headline',
                    content:'Jasmine, getting started'
                },

                {
                    elementType: 'Paragraph',
                    content: `
                    `
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
            ]
        }
    ]
};

export default function getMatchersData(){
    return data;
}