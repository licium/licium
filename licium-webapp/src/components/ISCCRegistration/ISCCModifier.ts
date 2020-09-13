import { ISCCCode } from '../ISCC/ISCC'
import { MetaIdResponse } from './ISCCServiceAdapter'

export const replaceMetaInfoOnISCC = (
    iscc: ISCCCode,
    metaId: MetaIdResponse
) => ({
    ...iscc,
    iscc: iscc.iscc.replace(/\w*/, metaId.code),
    bits: [metaId.bits, ...iscc.bits.slice(1)],
    title: metaId.title,
    title_trimmed: metaId.title_trimmed,
    extra: metaId.extra,
    extra_trimmed: metaId.extra_trimmed,
})
