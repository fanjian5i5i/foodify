import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const FoodCard = () => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-1/c0.27.160.160/p160x160/10987704_885355421514870_7386819000247680812_n.jpg?oh=88ad09d8d65704e293596210d9f2a2ab&oe=582D7604"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
  </Card>
);

export default FoodCard;
