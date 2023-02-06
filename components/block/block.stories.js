export default { title: 'Blocks' };

import block from './block.twig';
import drupalAttribute from 'drupal-attribute'
import './block.css';
import './block.js';
export const default_block = () => (
    block({
        attributes: new drupalAttribute(),
        title_attributes: new drupalAttribute(),
        plugin_id: "Some plugin",
        title_prefix: "Some prefix info",
        title_suffix: "",
        label: "I'm a Drupal block!",
        content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        configuration: {
            provider: "Some module"
        }
    })
);
