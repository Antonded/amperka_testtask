// addon.cc
#include <node.h>

namespace ALSA {

using v8::Exception;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

#include "alsa.h"

void playBuf(const FunctionCallbackInfo<Value>& args) {
    String::Utf8Value deviceName(args[0]->ToString());
    const char* deviceName_c = (const char*)(*deviceName);

    const int freq = args[2]->IntegerValue();
    const int volume = args[3]->IntegerValue();

    Local<v8::Array> buf = Local<v8::Array>::Cast(args[1]);
    short *buf_c = new short[buf->Length()];
      for (uint32_t i = 0; i < buf->Length(); i++)
        buf_c[i] = buf->Get(i)->IntegerValue();

    args.GetReturnValue().Set(playBuf_c(deviceName_c, buf_c, buf->Length(), freq, volume));
}

void playFile(const FunctionCallbackInfo<Value>& args) {
    String::Utf8Value deviceName(args[0]->ToString());
    const char* deviceName_c = (const char*)(*deviceName);

    String::Utf8Value path(args[1]->ToString());
    const char* path_c = (const char*)(*path);

    const int volume = args[2]->IntegerValue();

    args.GetReturnValue().Set(playFile_c(deviceName_c, path_c, volume));
}

void Init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "playBuf", playBuf);
  NODE_SET_METHOD(exports, "playFile", playFile);
}

NODE_MODULE(ALSA, Init)

}