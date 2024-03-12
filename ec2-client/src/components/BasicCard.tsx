import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard(props: any) {

  // User can pass in data in a list, one line per index in list
  const dataInCard :any = []
  props.data.forEach((dataPoint: any) => {
    dataInCard.push(<Typography variant="body2">{dataPoint}</Typography>)
  })


  //Creates a card with data
  //Contains
  // Header
  // An amount of lines of data
  return (
    <Card className="mt-2 mb-2" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        {dataInCard}
      </CardContent>
    </Card>
  );
}


// EXTRA CODE that was used and rewritten
{/* <Typography variant="body2">
{props.data}
</Typography> */}
{/* {props.data.forEach((element: any) => {
console.log(element);
return(<Typography variant="body2">{element}</Typography>)            
})} */}
{/* {props.data} */}