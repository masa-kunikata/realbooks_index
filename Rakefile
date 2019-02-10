require 'pp'
require 'yaml'
DEFAULT_SETTING_YAML = 'setting.yml'

module BigFakeCdIndex

  BOOKS = %w<
    Colorado
    EvansBk
    JazzFake
    JazzLTD
    Library
    New[\ ]Real1
    NewReal1
    NewReal2
    NewReal3
    Realbk1
    Realbk2
    Realbk3
    TheBook
  >
  
  LETTER_REGEX      = /\A[A-Z#]\Z/
  PAGE_DELIM_REGEX  = /\ABig Fake CD — Master Index Page.*\Z/
  
  FIRST_BOOK_REGEX  = /
    \A
    (?<tune>[^.].+?)                    # tune title
    ([ ]|[ ]\.{1,2}[ ]|[ ]?\.{3,}[ ]?)  # delimiter
    (?<book>#{BOOKS * '|'}?)            # book title
    [ ]
    (?<page>[A0-9]+?)                   # page
    \Z                                  # before new line
  /x

  CONTINUED_BOOK_REGEX  = /
    \A
    \.+[ ]?                   # delimiter
    (?<book>#{BOOKS * '|'}?)  # book title
    [ ]
    (?<page>[A0-9]+?)         # page
    \Z                        # before new line
  /x
  
  module_function

  def to_ruby_object(index_txt)
    o = {}
    
    title_fragment = nil
    current_tune = nil
    
    File.open(index_txt, "r:utf-8") do |f|
      while line = f.gets
        case line
        when LETTER_REGEX
          next

        when PAGE_DELIM_REGEX
          next

        when FIRST_BOOK_REGEX
          tune = "#{title_fragment}#{$~['tune']}"
          title_fragment = nil
          
          book = $~['book']
          page = $~['page']
          
          current_tune = tune
          o[tune] = [{book: book.gsub(' ', ''), page: page}]

        when CONTINUED_BOOK_REGEX
          raise 'NO current_tune!' unless current_tune
        
          book = $~['book']
          page = $~['page']
          
          o[current_tune] << {book: book.gsub(' ', ''), page: page}
          
        else
          # should be the first fragment of a long title
          title_fragment = line.chomp('') + ' '
        end
      end
    end
    o
  end

  def display_info(indexes, io: $stdout)
    begin
      realbooks = indexes.values.flatten.map{|i| i[:book]}.uniq.sort
      io.puts 
      io.puts '-- realbooks'
      io.puts realbooks

      io.puts
      io.puts '-- tunes'
      io.puts "#{indexes.keys.size} tunes"
    end

    begin
      io.puts 
      io.puts '-- many_books_tune_titles'
      
      max_books_size = indexes.map{|k, v| v.size}.max
      many_books_tune_titles = indexes
        .select{|k, v| max_books_size - 2 < v.size}
        .sort_by{|k, v| -v.size}
        .map{|title, books| "#{title} (#{books.size} books)"}
      io.puts many_books_tune_titles
      io.puts '--------'
    end

    begin
      io.puts 
      io.puts '-- long_tune_titles'
      
      longest_title_size = indexes.keys.map{|t| t.size}.max
      long_tune_titles = indexes.keys
        .select{|t| longest_title_size - 15 < t.size}
        .sort_by{|t| -t.size}
      io.puts long_tune_titles
      io.puts '--------'
    end

    begin
      io.puts 
      io.puts '-- short_tune_titles'

      shortest_title_size = indexes.keys.map{|t| t.size}.min
      short_tune_titles = indexes.keys.select{|t| shortest_title_size == t.size}
      io.puts short_tune_titles
      io.puts '--------'
    end

    begin
      io.puts 
      io.puts '-- no number pages'

      no_number_pages = indexes.values.flatten.map{|i| i[:page]}.select{|page| page =~ /[a-z]/i}
      no_number_page_include = indexes.select{|k, values| values.find{|v| no_number_pages.include?(v[:page])}}
      io.puts no_number_page_include.pretty_inspect
      io.puts '--------'
    end
  end
end



task default: :index_to_yaml 

desc "index_to_yaml"
task :index_to_yaml, ['setting_yaml'] do |task, args|
  setting_yaml = args[:setting_yaml] || DEFAULT_SETTING_YAML

  setting = YAML.load_file(setting_yaml)

  indexes = BigFakeCdIndex.to_ruby_object(setting[:index_txt])

  BigFakeCdIndex.display_info(indexes) if setting[:display_info]
  
  File.write(setting[:output_yml], indexes.to_yaml)
end

