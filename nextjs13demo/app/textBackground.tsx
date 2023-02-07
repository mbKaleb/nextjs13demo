export default function TextBackground() {

    let items = []
    for (let i = 0; i < 21; i++) {
        items.push(
            <hr 
            className="mt-8" 
            key={`id-${i}`}
            style={{
                color: '#7ea6e6',
                backgroundColor: '#7ea6e6',
                height: 2,
                borderColor: '#7ea6e6',
            }} />
        )
    }

    return (
        <div className="bg-yellow-200 w-full h-[97vh] z-500" >
            <div className="h-24"/>
            <div className="absolute top-24 left-16 h-[97vh] p-0.5 border-l-[3px] border-r-[3px]  border-rose-400 z-0 " />
            <hr className=" mt-8" style={{
                color: '#7ea6e6',
                backgroundColor: '#7ea6e6',
                height: 2,
                borderColor: '#7ea6e6',
            }} />
            {items}
        </div>
    )
}