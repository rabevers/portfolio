import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'git@github.com:rabevers/portfolio.git', // Update to point to your repository
  user: {
   name: 'rabevers', // update to use your name
   email: 'richard.bevers@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);