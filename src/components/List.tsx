import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { getPosts } from '../features/posts/postSlice';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import { Button, Card, CardActions, CardContent, CircularProgress, Typography } from '@mui/material';
import InfoModal from './InfoModal';
import Article from '../models/articleModel';
import { getInfo } from '../features/posts/infoSlice';


export default function List() {
    const selectedCountry: string = useAppSelector(state => state.countrySliceReducer.value);

    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(getPosts(selectedCountry))
    }, [selectedCountry])

    const { data, loading } = useAppSelector(state => state.postsSliceReducer);

    const handleClick = (dataInfo: Article) => {
        dispatch(getInfo(dataInfo));
    }

    const cardStyle = {
        width: "420px",
        backgroundColor: "white",
        color: "#f1f1f1",
        marginTop: "10px",
        marginLeft: "10px"
    }

    const boxStyle = {
        width: '100%',
        backgroundColor: "#f2f2f2",
        fontFamily: "'Montserrat', sans-serif"
    }

    return (
        <Box sx={boxStyle} className="container">
            <Stack>
                {loading ? (
                    <CircularProgress />
                ) :
                    (
                        data?.articles &&
                        data.articles.map((value, index) => {
                            return (
                                <Card sx={cardStyle} key={index}>
                                    <CardContent>
                                        <Typography style={{ fontSize: "18px", lineHeight: "21px", color: "black" }} gutterBottom variant="h6" component="div">
                                            {value.title}
                                        </Typography>
                                        <Typography style={{ fontSize: "14px", lineHeight: "18px", color: "black" }} variant="body2" color="whitesmoke">
                                            {value.source.name}
                                        </Typography>
                                        <Typography style={{ fontSize: "13px", lineHeight: "18px", color: "black" }} variant="subtitle1" color="whitesmoke">
                                            {value.publishedAt}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Button onClick={() => handleClick(value)}>
                                            <InfoModal />
                                        </Button>
                                    </CardActions>
                                </Card>
                            );
                        })
                    )}
            </Stack>
        </Box >
    );
}