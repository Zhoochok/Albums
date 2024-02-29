'use strict';
const { Album, Photo } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Album.bulkCreate(
      [
        {
          userId: 1,
          name: 'Котики',
          img: 'https://i.pinimg.com/236x/8a/e9/ed/8ae9ed1a33832cc81db2cd8b597aac71.jpg',
          private: false,
          Photos: [
            {
              description: 'Британец',
              img: 'https://avatars.dzeninfra.ru/get-zen_doc/1860789/pub_6249dbd54d78e042ca18e940_629cded1db9da0588b180be4/scale_1200',
            },
            {
              description: 'Мейн кун',
              img: 'https://news.store.rambler.ru/img/e9dc5ab29731c3779858c516f717b881?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen',
            },
            {
              description: 'Метис',
              img: 'https://imgtest.mir24.tv/uploaded/images/crops/2023/August/870x489_0x291_detail_crop_20230811141350_1900be3c_909832022dec072f21e636b327d092ea7632c252924e4023a1c5bbb035775671.jpg',
            },
          ],
        },
        {
          userId: 2,
          name: 'Пёсики',
          img: 'https://s10.stc.yc.kpcdn.net/share/i/12/10227632/wr-960.webp',
          private: false,
          Photos: [
            {
              description: 'Алабай',
              img: 'https://lapkins.ru/upload/uf/1f8/1f83db3c6aa33be78e996d717ec7ac2e.jpg',
            },
            {
              description: 'Французский бульдог',
              img: 'https://znanierussia.ru/articles/wmedia/wikipedia/commons/thumb/a/a2/French_Bulldog_Male.jpg/274px-French_Bulldog_Male.jpg',
            },
            {
              description: 'Tatarin',
              img: 'https://avatars.githubusercontent.com/u/150824221?v=4',
            },
          ],
        }
      ],
      {
        include: [Photo],
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await Album.destroy({
      truncate: {
        cascade: true,
      },
    });
  }
};
