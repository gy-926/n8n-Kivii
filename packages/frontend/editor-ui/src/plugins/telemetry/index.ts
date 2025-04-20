import type { Plugin } from 'vue';
import type { ITelemetrySettings } from '@n8n/api-types';
import type { ITelemetryTrackProperties, IDataObject } from 'n8n-workflow';
import type { RouteLocation } from 'vue-router';
import type { IUpdateInformation } from '@/Interface';
import type { RudderStack } from './telemetry.types';

export class Telemetry {
	private pageEventQueue: Array<{ route: RouteLocation }>;
	private previousPath: string;

	private get rudderStack(): RudderStack | undefined {
		return undefined; // 始终返回undefined以禁用RudderStack
	}

	constructor() {
		this.pageEventQueue = [];
		this.previousPath = '';
	}

	init() {
		// 不初始化遥测
		return;
	}

	identify() {
		// 不发送身份信息
		return;
	}

	track() {
		// 不跟踪事件
		return;
	}

	page() {
		// 不跟踪页面访问
		return;
	}

	reset() {
		// 不需要重置
		return;
	}

	flushPageEvents() {
		// 清空队列
		this.pageEventQueue = [];
	}

	trackAskAI() {
		// 不跟踪AI相关事件
		return;
	}

	trackAiTransform() {
		// 不跟踪AI转换相关事件
		return;
	}

	trackNodeParametersValuesChange() {
		// 不跟踪节点参数变化
		return;
	}

	private initRudderStack() {
		// 不初始化RudderStack
		return;
	}

	install(app: any) {
		app.config.globalProperties.$telemetry = this;
	}
}

export const telemetry = new Telemetry();

export const TelemetryPlugin: Plugin = {
	install(app) {
		telemetry.install(app);
	},
};
