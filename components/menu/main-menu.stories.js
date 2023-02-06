export default { title: 'Main Menu' };

import block from './main-menu.twig';
import drupalAttribute from 'drupal-attribute'
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
