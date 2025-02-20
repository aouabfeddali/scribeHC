// This file is auto-generated by @hey-api/openapi-ts

export interface Body_upload_transcribe_audio {
  file: Blob | File;
}

export interface HTTPValidationError {
  detail?: ValidationError[];
}

export interface ValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

export type HealthCheckResponse = unknown;

export interface UploadTranscribeAudioData {
  formData: Body_upload_transcribe_audio;
}

export type UploadTranscribeAudioResponse = unknown;

export interface $OpenApiTs {
  "/v1/health": {
    get: {
      res: {
        /**
         * Successful Response
         */
        200: unknown;
        /**
         * Not found
         */
        404: unknown;
      };
    };
  };
  "/v1/upload": {
    post: {
      req: UploadTranscribeAudioData;
      res: {
        /**
         * Successful Response
         */
        200: unknown;
        /**
         * Not found
         */
        404: unknown;
        /**
         * Validation Error
         */
        422: HTTPValidationError;
      };
    };
  };
}
