
import { Card, Grid, Avatar, Typography } from '@material-ui/core'

export default function Services(props) {

    return (
        <div>
            <Grid container>
                <Grid item sm={12} md={6}>
                <Card style={{padding: 15, margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                <Typography variant="h5" align="center">
                Melissa Hayes-Norskog 
                </Typography>
                <br />
                <Avatar src="Melissa.jpg" at="Melissa" style={{display: "flex", margin: "auto", width: 200, height: 200}}/>
                <br />
                <Typography variant="subtitle1" align="center">
                Melissa grew up in Tampa, Florida and the Northeast Georgia Mountains. Surrounded by nieces and nephews at a young age, she learned to appreciate and understand children and became interested in the field of early childhood development. Melissa later attended the Child Development Program at Bob Jones University and earned her degree there in 1999. She also has attended various workshops and training opportunities in her field.

Since then, she has successfully been the director of two childcare centers, has been an assistant director, program coordinator for a pre-school program, and still works as a professional nanny. Because of her love for children and families, and her experience as a nanny, she is dedicated to finding "just the right fit" for nannies and clients.

Melissa enjoys reading, playing board games, writing, and music. She lives with her husband, Jared, in Bellingham.
                </Typography>
                </Card>

            

                </Grid>
                <Grid item sm={12} md={6}>
                <Card style={{padding: 15, margin: 15, border: "1px solid black", boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.2)"}}>
                    <Typography variant="h5" align="center">
                    Tracy Caruso                
                    </Typography>
                    <br />
                    <Avatar src="Tracy.jpg" at="Tracy" style={{display: "flex", margin: "auto", width: 200, height: 200}}/>
                    <br />
                    <Typography variant="subtitle1" align="center">
                    Tracy was born and raised in Seattle, WA. Tracy discovered her love for children at a young age, taking babysitting classes, and holding one day camps with younger kids in her neighborhood. She went on to WWU where she earned her degree in English, minoring in Spanish. Because of her strong feelings about literacy, she surrounds herself and the children in her care with books and writing materials. Tracy has taken many workshops and classes in the child development field. She has directed 2 childcare centers in the surrounding area, and currently still works as a professional nanny.

Tracy lives with her husband, Aaron, in Bellingham. They love to explore the many parks and trails in Whatcom County, play board games, and attend Mariners games.
                    </Typography>
                </Card>
                </Grid>
            </Grid>
            
        </div>
    )
}