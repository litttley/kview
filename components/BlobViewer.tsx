import { type BlobMeta } from "@kitsonk/kv-toolbox/blob";
import { type KvKeyJSON } from "@kitsonk/kv-toolbox/json";
import { matches } from "@oak/commons/media_types";
import { format } from "@std/fmt/bytes";
import { keyJsonToPath } from "$utils/kv.ts";

const WEB_IMAGE_MEDIA_TYPES = [
  "image/apng",
  "image/avif",
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/svg+xml",
  "image/webp",
  "image/bmp",
  "image/x-icon",
];

const WEB_AUDIO_MEDIA_TYPES = [
  "audio/3gpp",
  "audio/3gpp2",
  "audio/3gp2",
  "audio/aac",
  "audio/mpeg",
  "audio/flac",
  "audio/x-flac",
  "audio/mpeg",
  "audio/mp4",
  "audio/ogg",
  "audio/wave",
  "audio/wav",
  "audio/x-wav",
  "audio/x-pn-wav",
  "audio/webm",
];

const WEB_VIDEO_MEDIA_TYPES = [
  "video/3gpp",
  "video/3gpp2",
  "video/3gp2",
  "video/mpeg",
  "video/mp4",
  "video/ogg",
  "video/quicktime",
  "video/webm",
];

function Preview(
  { contentType, databaseId, currentKey }: {
    contentType: string;
    databaseId: string;
    currentKey: KvKeyJSON;
  },
) {
  if (matches(contentType, WEB_IMAGE_MEDIA_TYPES)) {
    return (
      <div class="p-4">
        <img
          class="border rounded-lg p-2"
          src={`/api/blob/serve/${databaseId}/${keyJsonToPath(currentKey)}`}
        />
      </div>
    );
  }
  if (matches(contentType, WEB_AUDIO_MEDIA_TYPES)) {
    return (
      <div class="p-4 flex justify-center">
        <audio
          controls
          src={`/api/blob/serve/${databaseId}/${keyJsonToPath(currentKey)}`}
        />
      </div>
    );
  }
  if (matches(contentType, WEB_VIDEO_MEDIA_TYPES)) {
    return (
      <div class="p-4 flex justify-center">
        <video
          controls
          class="w-full lg:w-4/5 rounded-lg"
          src={`/api/blob/serve/${databaseId}/${keyJsonToPath(currentKey)}`}
        />
      </div>
    );
  }
  return null;
}

export function BlobViewer(
  { databaseId, currentKey, meta }: {
    databaseId: string;
    currentKey: KvKeyJSON;
    meta: BlobMeta;
  },
) {
  let table;
  let preview;
  switch (meta.kind) {
    case "blob":
      preview = (
        <Preview
          contentType={meta.type}
          databaseId={databaseId}
          currentKey={currentKey}
        />
      );
      table = (
        <table class="w-full">
          <tbody>
            <tr>
              <td>Type:</td>
              <td>
                <code>{meta.type}</code>
              </td>
            </tr>
            {meta.size
              ? (
                <tr>
                  <td>Size:</td>
                  <td>{format(meta.size)}</td>
                </tr>
              )
              : undefined}
          </tbody>
        </table>
      );
      break;
    case "buffer":
      table = (
        <table class="w-full">
          <tbody>
            {meta.size
              ? (
                <tr>
                  <td>Size:</td>
                  <td>{format(meta.size)}</td>
                </tr>
              )
              : undefined}
          </tbody>
        </table>
      );
      break;
    case "file":
      preview = (
        <Preview
          contentType={meta.type}
          databaseId={databaseId}
          currentKey={currentKey}
        />
      );
      table = (
        <table class="w-full">
          <tbody>
            <tr>
              <td>Type:</td>
              <td>
                <code>{meta.type}</code>
              </td>
            </tr>
            <tr>
              <td>Filename:</td>
              <td>
                <code>{meta.name}</code>
              </td>
            </tr>
            {meta.lastModified
              ? (
                <tr>
                  <td>Last modified:</td>
                  <td>{new Date(meta.lastModified).toISOString()}</td>
                </tr>
              )
              : undefined}
            {meta.size
              ? (
                <tr>
                  <td>Size:</td>
                  <td>{format(meta.size)}</td>
                </tr>
              )
              : undefined}
          </tbody>
        </table>
      );
  }

  return <>{preview}{table}</>;
}