import React from 'react'

export default function CompDoc(props) {
    const headers = [
        'property',
        'dataType',
        'required',
        'default',
        'description',
    ];
    
    const { name, component, docData } = props;

    return (
        <div>
            <div className="vrl-comp">
                <div className="vrl-comp-header-wrap">
                    <h2>{name}</h2>
                    <span className="vrl-comp-tag">A11y</span>
                    <span className="vrl-comp-tag">Tested</span>
                    <span className="vrl-comp-tag">+52</span>
                </div>
                <div className="vrl-comp-container">{component}</div>
                <div className="vrl-comp-doc">
                    <div className="vrl-comp-doc-blk">
                        <table>
                            <tbody>
                                <tr>{headers.map((h) => <th key={h}>{h}</th>)}</tr>
                                {docData.data.map((dd, i) => <tr key={i}>{headers.map(h => <td key={h}>{dd[h]}</td>)}</tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
