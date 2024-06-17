
import { Box } from '@mui/material';

import Products from './Products';



function HomePage({productData}) {





   
   

    return ( 

        <>
           
         <Box
          sx={{
            display:"flex",
            justifyContent:"space-evenly",
            flexWrap:"wrap",
            gap:"20px",
            minHeight:"60vh",
          }}
         >

          { productData && productData.map((result)=>(
            <Products cardData={result} />
          ))}


         
         </Box>
       
        </>
     );
}

export default HomePage;

