/* eslint-disable no-control-regex */
export default {
	__mkl_serv_intel_cpu_true: {
		find: /\x53\x48\x83\xEC\x20\x8B\x35[\s\S]{4}/sg,
		replace: "\x55\x48\x89\xE5\xB8\x01\x00\x00\x00\x5D\xC3"
	},
	__intel_fast_memset_or_memcpy_A: {
		find: /(\xFF{4}|\x90{4})\x56\xE8(?:\x6A|\x5A|\x4A|\x3A)\x00\x00\x00([\s\S]{2})/sg,
		replace: "{1}\x56\xE8\x0A\x00\x00\x00{2}"
	}
};
