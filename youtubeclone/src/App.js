import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';



class App extends React.Component{
    render(){
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item x5={12}>
                    <Grid container spacing={16}>
                        <Grid item x5={12}>
                            {/* SEARCH BAR */}
                        </Grid>
                        <Grid item x5={8}>
                        {/* VIDEO DETAIL */}
                        </Grid>
                        <Grid item x5={4}>
                            {/* VIDEO LIST */}
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        )
    }
}



export default App;