import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from "@mui/material/CardActions";
import { Box, Button, CardActionArea, CircularProgress, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { getPosts } from '../features/posts/postSlice';
import InfoModal from './InfoModal';
import { getInfo } from '../features/posts/infoSlice';
import Article from '../models/articleModel';


export default function Tiles() {

    const selectedCountry: string = useAppSelector(state => state.countrySliceReducer.value);

    const dispatch = useAppDispatch();
    React.useEffect(() => {
        dispatch(getPosts(selectedCountry))
    }, [selectedCountry])

    const { data, loading } = useAppSelector(state => state.postsSliceReducer);

    const handleClick = (dataInfo: Article) => {
        dispatch(getInfo(dataInfo));
    }

    const sampleImage: string = "/sampleImage.jpg";


    return (

        <Box sx={{ minHeight: 377 }}>
            <Stack justifyContent="space-between" spacing={2} sx={{ display: "flex", textAlign: 'center', flexDirection: "unset", flexWrap: "wrap" }}>
                {loading ? (
                    <CircularProgress />
                ) :
                    (
                        data?.articles &&
                        data.articles.map((value, index) => {
                            return (
                                <Card sx={{ maxWidth: "calc(25% - 20px)", backgroundColor: "#f1f1f1", marginTop: "16px !important", marginLeft: "10px !important", marginRight: "10px !important" }} key={index}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={value.urlToImage != null ? value.urlToImage : sampleImage}
                                            alt={value.source.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {value.source.name}
                                            </Typography>
                                            <Typography variant="subtitle1" color="text.secondary">
                                                {value.publishedAt}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions style={{ display: "flex", justifyContent: "center" }}>
                                        <Button size="small" color="primary" onClick={() => handleClick(value)} variant="text" >
                                            <InfoModal />
                                        </Button>
                                    </CardActions>
                                </Card>
                            );
                        })
                    )}
            </Stack>
        </Box>

    );
}