var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'git@github.com:trick0/jdtai.git', // Update to point to your repository  
        user: {
            name: 'Walter', // update to use your name
            email: '0waltercossu@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)