;(function() {
	var LiferayAUI = Liferay.AUI;

	AUI().applyConfig(
		{
			groups: {
				'field-region': {
					base: MODULE_PATH + '/',
					filter: LiferayAUI.getFilterConfig(),
					combine: Liferay.AUI.getCombine(),
					modules: {
						'liferay-ddm-form-field-region': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'region_field.js',
							requires: [
								'liferay-ddm-form-renderer-field'
							]
						},
						'liferay-ddm-form-field-region-template': {
							condition: {
								trigger: 'liferay-ddm-form-renderer'
							},
							path: 'region.soy.js',
							requires: [
								'soyutils'
							]
						}
					},
					root: MODULE_PATH + '/'
				}
			}
		}
	);
})();