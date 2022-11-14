import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function About() {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Chief Expresso Officer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bear
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Born on December 25, 2004. Bear always had a mission to create things
                        in life that would reach not thousands but millions. It took a long time
                        to reach this point, many struggles and obstacles. Our launch this  year has been
                        incredible and we can't wait for further growth.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">aBearCEO.fb.com</Button>
                    <Button size="small">aBearCEO@gmail.com</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Expresso Officer of Operations"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Jason
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        "I met bear about 2 and a half years ago. Ever since meeting him, he showed me
                        what his vision with this was and I truly believed in it. I knew I had to support
                        him, so I personally invested all my money in him and this company. It payed off
                        triple-fold and I cannot express my gratitude"
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">jasonbcoc.fb.com</Button>
                    <Button size="small">jasonbcoc@gmail.com</Button>
                </CardActions>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                    alt="Expresso Financial Officer"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Ayanna
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        "Im the most proud of my little bear. Ever since a kid he was always still an adult.
                        He always took responsibility for us and never gave me a hard day. I knew
                        that I had to support him and his vision and I cannot be more appreciative
                        of the people who decided to look towards our product and buy it."
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">aofbcob.fb.com</Button>
                    <Button size="small">aofbcoc@gmail.com</Button>
                </CardActions>
            </Card>
        </>
    );
}

export default About;