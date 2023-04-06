import * as _Haptics from "expo-haptics";

export class Haptics {
  static light(): void {
    _Haptics.impactAsync(_Haptics.ImpactFeedbackStyle.Light);
  }
  static medium(): void {
    _Haptics.impactAsync(_Haptics.ImpactFeedbackStyle.Medium);
  }
  static heavy(): void {
    _Haptics.impactAsync(_Haptics.ImpactFeedbackStyle.Heavy);
  }
}
