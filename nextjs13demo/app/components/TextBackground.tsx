"use client"
export default function TextBackground() {

    let linesArr = []
    for (let i = 0; i < 26; i++) {
        linesArr.push(
            <hr 
            className="mt-[1.378rem]"
            key={`id-${i}`}
            style={{
                color: '#7ea6e6',
                backgroundColor: '#7ea6e6',
                height: 2.01,
                borderColor: '#7ea6e6',
            }} />
        )
    }

    return (
        <div className="bg-yellow-200 w-full h-[98vh] z-500 " > {/*yellow */}
            <div className="h-24"/> {/*padding*/}

            <div className="fixed top-0 left-24 h-[100%] p-0.5 border-l-[3px] border-r-[3px]  border-rose-400  " /> {/*red bars*/}
            
            <hr className=" mt-8" style={{
                color: '#7ea6e6',
                backgroundColor: '#7ea6e6',
                height: 2,
                borderColor: '#7ea6e6',
            }} />
            {linesArr}
        </div>
    )
}