"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  IconMicrophone,
  IconPaperclip,
  IconPlus,
  IconSearch,
  IconSend,
  IconSparkles,
  IconWaveSine,
} from "@tabler/icons-react";
import { useRef, useState } from "react";

export default function Ai01() {
  const [message, setMessage] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim()) {
      setMessage("");
      setIsExpanded(false);

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    setIsExpanded(e.target.value.length > 100 || e.target.value.includes("\n"));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="w-full text-white">
      <h1 className="mb-7 mx-auto max-w-2xl text-center text-2xl font-semibold leading-9 px-1 whitespace-pre-wrap">
        How can I help you today?
      </h1>

      <form onSubmit={handleSubmit} className="group/composer w-full">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="sr-only"
          onChange={(e) => {}}
        />

        {/* Glassy Outer Container */}
        <div
          className={cn(
            "w-full max-w-2xl mx-auto bg-white/15 backdrop-blur-2xl cursor-text overflow-hidden bg-clip-padding p-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/30 transition-all duration-200 rounded-3xl",
            {
              "grid grid-cols-1 grid-rows-[auto_1fr_auto]": isExpanded,
              "grid grid-cols-[auto_1fr_auto] grid-rows-[auto_1fr_auto]":
                !isExpanded,
            }
          )}
          style={{
            gridTemplateAreas: isExpanded
              ? "'header' 'primary' 'footer'"
              : "'header header header' 'leading primary trailing' '. footer .'",
          }}
        >
          {/* Textarea Section */}
          <div
            className={cn(
              "flex min-h-14 items-center overflow-x-hidden px-1.5",
              {
                "px-2 py-1 mb-0": isExpanded,
                "-my-2.5": !isExpanded,
              }
            )}
            style={{ gridArea: "primary" }}
          >
            <div className="flex-1 overflow-hidden max-h-52">
              <Textarea
                ref={textareaRef}
                value={message}
                onChange={handleTextareaChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything"
                className="
                  min-h-0
                  resize-none
                  rounded-none
                  border-none
                  p-3
                  text-base
                  text-white
                  placeholder:text-white
                  focus-visible:ring-0
                  focus-visible:ring-offset-0
                  scrollbar-thin
                  bg-transparent
                "
                rows={1}
              />
            </div>
          </div>

          {/* Leading Icons + Dropdown */}
          <div
            className={cn("flex", { hidden: isExpanded })}
            style={{ gridArea: "leading" }}
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/20"
                >
                  <IconPlus className="size-6 text-white/80" />
                </Button>
              </DropdownMenuTrigger>

              {/* ⬇️ Fixed: dropdown clearly visible now */}
              <DropdownMenuContent
                align="start"
                className="z-50 max-w-xs rounded-2xl p-1.5 border border-white/20 bg-black/80 backdrop-blur-xl text-white shadow-xl"
              >
                <DropdownMenuGroup className="space-y-1">
                  <DropdownMenuItem
                    className="rounded-[calc(1rem-6px)]"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <IconPaperclip size={20} className="opacity-60" />
                    Add photos & files
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-[calc(1rem-6px)]">
                    <IconSparkles size={20} className="opacity-60" />
                    Agent mode
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-[calc(1rem-6px)]">
                    <IconSearch size={20} className="opacity-60" />
                    Deep Research
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Right-side actions */}
          <div
            className="flex items-center gap-2"
            style={{ gridArea: isExpanded ? "footer" : "trailing" }}
          >
            <div className="ms-auto flex items-center gap-1.5">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full hover:bg-white/20"
              >
                <IconMicrophone className="size-5 text-white/80" />
              </Button>

              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full hover:bg-white/20 relative"
              >
                <IconWaveSine className="size-5 text-white/80" />
              </Button>

              {message.trim() && (
                <Button
                  type="submit"
                  size="icon"
                  className="h-9 w-9 rounded-full bg-white text-black hover:bg-white/90"
                >
                  <IconSend className="size-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
