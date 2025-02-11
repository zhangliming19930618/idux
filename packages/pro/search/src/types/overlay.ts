/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/IDuxFE/idux/blob/main/LICENSE
 */

import type { ExtractInnerPropTypes, VKey } from '@idux/cdk/utils'
import type { DefineComponent, PropType } from 'vue'

export const nameSelectOverlayProps = {
  selectedFieldKey: [String, Number, Symbol] as PropType<VKey>,
  searchValue: { type: String, required: true },
  setOnKeyDown: {
    type: Function as PropType<(keydown: ((evt: KeyboardEvent) => boolean) | undefined) => void>,
    required: true,
  },
  onChange: Function as PropType<(value: VKey | undefined) => void>,
} as const

export type NameSelectOverlayProps = ExtractInnerPropTypes<typeof nameSelectOverlayProps>
export type NameSelectOverlayComponent = DefineComponent<NameSelectOverlayProps, { updateOverlay: () => void }>
export type NameSelectOverlayInstance = InstanceType<NameSelectOverlayComponent>
