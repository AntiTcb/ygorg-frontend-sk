import EffectMonster from './EffectMonster';
import FusionMonster from './FusionMonster';
import LinkMonster from './LinkMonster';
import NormalMonster from './NormalMonster';
import RitualMonster from './RitualMonster';
import Spell from './Spell';
import SynchroMonster from './SynchroMonster';
import Trap from './Trap';
import XyzMonster from './XyzMonster';

export type Themes = keyof typeof themes;
export const themes = { NormalMonster, EffectMonster, FusionMonster, SynchroMonster, XyzMonster, LinkMonster, RitualMonster, Spell, Trap };
