//INFO: configure your site here

import cfg_json from './site_config.json'; //U: copied from enclosing repo if available

export const siteConfig = Object.assign({}, {
	name: "A Template Blog",
	description: "This is a placeholder description.",
	navbar_items: [ { "name": "Contact me", "url": "about:blank" }, { "name": "About me", "url": "about:blank" } ],
}, cfg_json);

export function getNavbarItems() {
	return siteConfig.navbar_items
}
