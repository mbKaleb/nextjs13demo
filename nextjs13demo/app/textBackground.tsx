export default function TextBackground() {

    const mappedItems = 
    Array.from(Array(3)).forEach((x, i) => {
        console.log('first')
      });
      console.log(mappedItems)
      

    return (
    <div
        className="bg-yellow-200 w-full h-[97vh] top-24"
    >
    
    <hr className="mt-20" style={{
        color: '##6f9ee8',
        backgroundColor: '#000000',
        height: 4,
        borderColor : '#6f9ee8'
    }}/>

    </div>
  )
}


// return (<hr className=" mt-8" style={{
//     color: '#7ea6e6',
//     backgroundColor: '#7ea6e6',
//     height: 4,
//     borderColor : '#7ea6e6',
// }}/>