import React from 'react';
import {ITask} from "../Interfaces";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


interface Props{
    task: ITask,
}

const TodoTask = ({task}: Props) => {


const deleteTask = () => {

}

    return (
        <Card sx={{ minWidth: 150, mt: 1.5 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Task :
                </Typography>
                <Typography variant="h5" component="div">
                    {task.taskName}
                </Typography>

                <Typography sx={{ mb: 1, mt: 1 }} color="text.secondary">
                    Deadline : {task.deadline}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained" >Update</Button>
                <Button variant="outlined" color="error" size="small" onClick={deleteTask}>Delete</Button>
            </CardActions>
        </Card>

    );
}

export default TodoTask;