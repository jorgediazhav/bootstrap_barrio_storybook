import { configure } from '@storybook/html';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Add the filters to Twig instance.
twigDrupal(Twig);

configure(require.context('../components', true, /\.stories\.js$/), module);