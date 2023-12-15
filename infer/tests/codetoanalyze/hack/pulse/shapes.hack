// Copyright (c) Facebook, Inc. and its affiliates.
//
// This source code is licensed under the MIT license found in the
// LICENSE file in the root directory of this source tree.

namespace Shapes;

class ShapeLogger {
  const type TSchemaShape = shape(
    'msg' => string,
    ?'debug_data' => ?string,
  );

  public static function logData(this::TSchemaShape $data) {
    \Level1\taintSink($data);
  }

  public static function logMixed(mixed $data) {}
}

class C1 {
  public function passViaShapeBad(SensitiveClass $sc) {
    ShapeLogger::logData(
      shape('msg' => 'Oh-oh', 'debug_data' => $sc->sensitiveField),
    );
  }

  public function passViaShapeGetBad(SensitiveClass $sc) {
    $s = shape('msg' => 'Oh-oh', 'debug_data' => $sc->sensitiveField);
    \Level1\taintSink($s['debug_data']);
  }

  public function passViaUnknownBad(SensitiveClass $sc) {
    $data = unknown($sc);
    ShapeLogger::logData(shape('msg' => 'Oh-oh', 'debug_data' => $data));
  }

  public function passViaShapeAndUnknownBad(SensitiveClass $sc) {
    $data = unknown(shape("sc" => $sc));
    ShapeLogger::logData(shape('msg' => 'Oh-oh', 'debug_data' => $data));
  }

  public function shapeLookupBad(SensitiveClass $sc, TSchemaShape $shape) {
    $_ = $shape['msg'];
    \Level1\taintSink($sc);
  }

  public function propagatedTaintUnrelated(SensitiveClass $sc) {
    $t1 = Unknown::unknown($sc->getId());
    if ($t1 is null) {
      ShapeLogger::logMixed(false);
    }

    $t2 = Shapes::idx($t1, 'field');
    if ($t2 is null) {
      ShapeLogger::logMixed(false);
    }
  }

  public static function FP_staticPropagatedTaintUnrelated(SensitiveClass $sc) {
    $t1 = Unknown::unknown($sc->getId());
    if ($t1 is null) {
      ShapeLogger::logMixed(false);
    }

    $t2 = Shapes::idx($t1, 'field');
    if ($t2 is null) {
      ShapeLogger::logMixed(false);
    }
  }
}
