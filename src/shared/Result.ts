export type Result<T, E> =
  | { success: true; data: T; isSuccess: true; isFailure: false }
  | { success: false; error: E; isSuccess: false; isFailure: true };

export const ok = <T>(value: T): Result<T, never> => ({
    success: true,
    data: value,
    isSuccess: true,
    isFailure: false,
});

export const fail = <E>(error: E): Result<never, E> => ({
    success: false,
    error,
    isSuccess: false,
    isFailure: true,
});

/**
 * Verifica si el Result es exitoso
 */
export function isOk<T, E>(result: Result<T, E>): result is Result<T, never> {
  return result.success === true;
}

/**
 * Verifica si el Result es un fallo
 */
export function isFail<T, E>(result: Result<T, E>): result is Result<never, E> {
  return result.success === false;
}

/**
 * Extrae el valor o lanza el error
 */
export function unwrap<T, E>(result: Result<T, E>): T {
  if (result.success) {
    return result.data;
  }
  throw result.error;
}

/**
 * Extrae el valor o devuelve un valor por defecto
 */
export function unwrapOr<T, E>(result: Result<T, E>, defaultValue: T): T {
  return result.success ? result.data : defaultValue;
}

/**
 * Mapea el valor de un Result exitoso
 */
export function map<T, U, E>(
  result: Result<T, E>,
  fn: (value: T) => U
): Result<U, E> {
  return result.success ? ok(fn(result.data)) : result;
}

/**
 * Mapea el error de un Result fallido
 */
export function mapError<T, E, F>(
  result: Result<T, E>,
  fn: (error: E) => F
): Result<T, F> {
  return result.success ? result : fail(fn(result.error));
}

/**
 * Encadena operaciones que devuelven Result
 */
export function flatMap<T, U, E>(
  result: Result<T, E>,
  fn: (value: T) => Result<U, E>
): Result<U, E> {
  return result.success ? fn(result.data) : fail(result.error);
}