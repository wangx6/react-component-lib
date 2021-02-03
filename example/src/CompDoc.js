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
    const { a11y } = docData;

    return (
        <div>
            <div className="vrl-comp">
                <h2>{name}</h2>
                <div>
                {component}
                </div>
                <div className="vrl-comp-doc">
                    <div>Accessibility - {a11y}</div>
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
