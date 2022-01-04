

let precedencesData = [
    {
        elementType:'Headline-3',
        content:'Operators precedences'
    },
    {
        elementType: 'Paragraph',
        content: `
           The highest is 20, lowest is 1
        `
    },
    {
        elementType: 'Paragraph',
        content: `
        <table class="table">
            <thead><tr><th>Precedence</th><th>Operators</th></tr><thead>
            <tbody>
                <tr>
                    <td>20</td>
                    <td>
                        <ul>
                            <li><code>(...)</code>: grouping</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>
                        <ul>
                            <li><code>__.__</code>: dot: member access</li>
                            <li><code>...[...]</code>: computed member access</li>
                            <li><code>new ...(...) :</code>: new with args</li>
                            <li><code>function() :</code>: function call</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>
                        <ul>
                            <li><code>new ... :</code>: new with <b>no</b> args</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>
                        <ul>
                            <li><code>...++</code>: postfix incrementation</li>
                            <li><code>...--</code>: postfix decrementation</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>
                        <ul>
                            <li><code>!...</code>: Logical NOT</li>
                            <li><code>~...</code>: Bitwise NOT</li>
                            <li><code>+...</code>: Unary plus</li>
                            <li><code>-...</code>: Unary minus</li>
                            <li><code>++...</code>: Prefix increment</li>
                            <li><code>--...</code>: Prefix decrement</li>
                            <li><code>typeof...</code>: typeof</li>
                            <li><code>void...</code>: void</li>
                            <li><code>delete ....</code>: delete</li>
                            <li><code>await ...</code>: await</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>
                        <ul>
                            <li><code>...**...</code>: Exponentiation</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>
                        <ul>
                            <li><code>/</code>: Division</li>
                            <li><code>*</code>: Multiplication</li>
                            <li><code>%</code>: Reminder</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>
                        <ul>
                            <li><code>...+...</code>: Addition</li>
                            <li><code>...-...</code>: Substraction</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>
                        <ul>
                            <li><code>...<<...</code>: Left shift</li>
                            <li><code>...>>...</code>: Right shift</li>
                            <li><code>...>>>..</code>: Bitwise Zero-fill right shift</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>
                        <ul>
                            <li><code>...<...</code>: Less than</li>
                            <li><code>...<=...</code>: Less than or equal</li>
                            <li><code>...>...</code>: Greater than</li>
                            <li><code>...>=...</code>: Greater than or equal</li>
                            <li><code>...in...</code>: in</li>
                            <li><code>instanceof...</code>: instanceof</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>
                        <ul>
                            <li><code>...==...</code>: Equal</li>
                            <li><code>...!=...</code>: Inequal</li>
                            <li><code>...===..</code>: Strict equal</li>
                            <li><code>...!==..</code>: Strict not equal</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>
                        <ul>
                            <li><code>...&...</code>: Bitwise AND</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>
                        <ul>
                            <li><code>...^...</code>: Bitwise XOR</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>
                        <ul>
                            <li><code>...|...</code>: Bitwise OR</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>
                        <ul>
                            <li><code>...&&...</code>: Logical AND</li>
                        </ul>
                    </td>
                </tr>   
                <tr>
                    <td>5</td>
                    <td>
                        <ul>
                            <li><code>...||...</code>: Logical OR</li>
                        </ul>
                    </td>
                </tr>    
                <tr>
                    <td>4</td>
                    <td>
                        <ul>
                            <li><code>.. ? .. : ..</code>: Conditional</li>
                        </ul>
                    </td>
                </tr>    
                <tr>
                    <td>3</td>
                    <td>
                        <ul>
                            <li><code>...=...</code>: Assignment</li>
                            <li><code>...+=...</code>: Addition assignment</li>
                            <li><code>...-=...</code>: Substraction assignment</li>
                            <li><code>...*=...</code>: Multiplication assignment</li>
                            <li><code>.../=...</code>: Division assignment</li>
                            <li><code>...%=...</code>: Remainder assignment</li>
                            <li><code>...**=...</code>: Exponential assignment</li>
                            <li><code>...<<=...</code>: Left shift assignment</li>
                            <li><code>...>>=...</code>: Right shift assignment</li>
                            <li><code>...>>>=...</code>: Zero-fill rithg shift assignment</li>
                            <li><code>...&=...</code>: Bitwise AND assignment</li>
                            <li><code>...|=...</code>: Bitwise OR assignment</li>
                            <li><code>...^=...</code>: Bitwise XOR assignment</li>
                            <li><code>...||=...</code>: Logical OR assignment</li>
                            <li><code>...&&=...</code>: Logical AND assignment</li>
                            <li><code>...??=...</code>: Logical nullish assignment</li>
                        </ul>
                    </td>
                </tr>       
                <tr>
                    <td>2</td>
                    <td>
                        <ul>
                            <li><code>yield ...</code>: yield</li>
                            <li><code>yield* ...</code>: yield*</li>
                        </ul>
                    </td>
                </tr> 
                <tr>
                    <td>1</td>
                    <td>
                        <ul>
                            <li><code>.. , .. : ..</code>: Comma</li>
                        </ul>
                    </td>
                </tr>                                                                                                                                                           
            </tbody>
        </table>
        `
    }
    
    ]
    
    export default function getPrecedencesData(){
        return precedencesData;
    }
    