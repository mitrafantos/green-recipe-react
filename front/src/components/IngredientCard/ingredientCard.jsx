import React from 'react';
import { Grommet, Image, Box, Button, Text } from 'grommet';
import { AddCircle } from 'grommet-icons';
import { hpe } from 'grommet-theme-hpe';

import './ingredientCard.css';

export default function IngredientCard(props) {
  const style = {
    width: '100%',
  };
  return (
    <Box className={'wrapper'}>
      <Box direction="column" height="100%" width="100%">
        <Box
          height="100%"
          width="100%"
          background={{
            image: `url(${props.ingredient.imageLink})`,
            position: 'center',
          }}
        />
        <Box
          className={'bottom'}
          direction="row-responsive"
          height="35%"
          width="100%"
        >
          <Box
            className={'details'}
            height="100%"
            width="70%"
            direction="column"
            justify="center"
            align="center"
            pad="10px"
            position="fixed"
          >
            <Text
              style={style}
              alignSelf="center"
              truncate="true"
              size="xlarge"
              textAlign="center"
              alignSelf="center"
            >
              {props.ingredient.name}
            </Text>
            <Text style={style} alignSelf="center" truncate="true" size="large">
              Цена: {props.ingredient.price}
            </Text>
            <Text style={style} alignSelf="center" truncate="true" size="large">
              Вес: {props.ingredient.weight}
            </Text>
          </Box>
          <Button
            icon={<AddCircle size="large" />}
            fit="content"
            align="center"
            justify="center"
            label="Добавить в рецепт"
          />
        </Box>
      </Box>
      <div className={'inside'}>
        <div className={'icon'}>
          <i className={'material-icons'}>info</i>
        </div>
        <div className={'contents'}>информация о товаре</div>
      </div>
    </Box>
  );
}
