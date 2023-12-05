<h1>Welcome To DSA Learning</h1>

<h4>Here is the all chapter that we will learn in this docs</h4>

<ul>
    <li>Big O Notation</li>
    <li>Recursion </li>
    <li>Linear Search </li>
    <li>Binary Search </li>
    <li>Bubble Sort </li>
    <li>Selection Sort </li>
    <li>Insertion Sort </li>
</ul>

</br>
<h1>Algorithms</h1>
</br>

<h2>Big O Notation</h2>
> Big-O notation হচ্ছে আমাদের কোনো একটা function এর ইনপুট বাড়ার সাথে সাথে কতটা টাইম কমপ্লেক্সিটি ও কতটা স্পেস কমপ্লেক্সিটি হচ্ছে সেটা নির্ণয় করা। এটি একটি টুল যার সাহায্যে কোনো একটা অ্যালগরিদমের রানটাইমের উপর ভিত্তি করে টাইম কমপ্লেক্সিটি বের করা যায়।
Big O notation কোনো অ্যালগরিদমের টাইম কমপ্লেক্সিটি ও কতটা স্পেস কমপ্লেক্সিটি নির্ণয় করতে ব্যবহৃত হয়, তাদের মধ্যে বৃদ্ধির হার হিসেবে প্রকাশিত হয়। উদাহরণস্বরূপ, O(1), O(log n), O(n), O(n log n), O(n^2) ইত্যাদি।
</br>

> Big-O notation এর মাধ্যমে আমাদের প্রতিনিয়ত ব্যবহৃত কয়েকটা জাভাস্কিপ্ট মেথত এর টাইম কমপ্লেসিটি ও স্পেস কমপ্লেসিটি নির্ণয় করি

=> <b>Big O(n)</b> - যখন কোনো ইনপুট আমাদের অনিশ্চিত থাকে ( মানে কতগুলো ইনপুট অথবা ভেলু থাকতে পারে অথবা আউটপুট আসতে পারে আমরা জানি না ) তখন আমরা সেটাকে n হিসেবে নেই, এবং যে সকল মেথডের টাইম কমপ্লেক্সিটি আমরা নির্ণয় করার সময় এইরকম ভাবে অনিশ্চিত ইনপুট আসতে পারে পাই সেগুলোকে আমরা Big O(n) বলি।

=> <b>Big O(1)</b> - যখন কোনো ইনপুট আমাদের নিশ্চিত থাকে ( মানে আমরা জানি যে ওইটা শুধুমাত্র একটা আউটপুট দিবে আমাদের কন্ডিশন অনুযায়ী ) তখন আমরা সেটাকে 1 ধরি, এবং যে সকল মেথডের টাইম কমপ্লেক্সিটি আমরা নির্ণয় করার সময় এইরকম ভাবে নিশ্চিত ইনপুট আসতে পারে পাই সেগুলোকে আমরা Big O(1) বলি।

<ul>
    <h2>Object</h2>
    <li>Object.keys - <b>Big O(n)</b> <p>( এটায় Big O(n) কারণ একটি object এ অনেক keys তাকতে পারে এটা বলা মুশকিল যে ওই object এর মধ্যে মোট কতটি entries তাকবে, তাই আমরা ধরে নিলাম যে একটা n ইনপুটে থাকবে এবং সেই n এ যত ইচ্ছা দেওয়া হবে তাই এটা n এর উপর ডিপেন্ডেড এবং এর জন্যই এটা Big O(n) )</p>
    </li>
    <li>Object.entries - <b>Big O(n)</b>
    <p>( same as object.keys )</p>
    </li>
    <li>Object.values - <b>Big O(n)</b><p>( same as object.keys )</p></li>
    <li>Object.hasOwnProperty - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ আমরা যখন কোনো property সার্চ করবো তখন তো আমরা একটা value ই পাবো এবং এর জন্যই এটা Big O(1) )</p>
    </li>
</ul>

<ul>
    <h2>Array</h2>
    <li>push, pop - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ একটি array তে আমরা যখন push or pop এর মাধ্যমে কোনো element যুক্ত করি তখন সেই element টি ওই array এর শেষের দিকে যুক্ত হয় অথবা ডিলিট হয়, যার জন্য কোনো element এর ইনডেক্স পরিবর্তন করতে হয় না এবং এর জন্যই এটা Big O(1) )</p>
    </li>
    <li>shift, unshift - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি array তে আমরা যখন shift or unshift এর মাধ্যমে কোনো element যুক্ত করি তখন সেই element টি ওই array এর শুরুর দিকে যুক্ত হয় অথবা ডিলিট হয়, যার জন্য আগের element দের ইনডেক্স পরিবর্তন করতে হয়। তাই এখানে n বার নতুন element যুক্ত হতে পারে যার জন্যই এটা Big O(n) )</p>
    </li>
    <li>search - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি array তে কতগুলো value তাকবে তা বলা যাবে না এবং আমরা যদি ওই array তে কোনো কিছু search করি তাহলে আমাদের ওই array তে থাকা প্রতিটি element এর মধ্যে দিয়ে খুজতে হবে আমাদের কাংকিত element টিকে এবং সেটা n তম বার ও হতে পারে যার জন্যই এটা Big O(n) )</p>
    </li>
    <li>access - <b>Big O(1)</b>
    <p>( এটায় Big O(1) কারণ একটি array থেকে আমরা যখন কোনো একটা element access করতে চাই তার index এর মাধ্যমে তখন কিন্তু আমরা সরাসরি ওই element টাকে access করতে পারি এবং সেটা একটি element হয় যার জন্যই এটা Big O(1) )</p>
    </li>
    <li>forEach - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি forEach এ কতগুলো ইনপুট আসবে সেটা আমরা জানি না। এখন সেটা অনেক বড় কোনো ইনপুট হতে পারে আবার ছোটও হতে পারে তার জন্যই এটা Big O(n) )</p>
    </li>
    <li>map - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি map এ কতগুলো ইনপুট আসবে সেটা আমরা জানি না। এখন সেটা অনেক বড় কোনো ইনপুট হতে পারে আবার ছোটও হতে পারে তার জন্যই এটা Big O(n) )</p>
    </li>
    <li>filter - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি filter এ কতগুলো ইনপুট আসবে সেটা আমরা জানি না। এখন সেটা অনেক বড় কোনো ইনপুট হতে পারে আবার ছোটও হতে পারে তার জন্যই এটা Big O(n) )</p>
    </li>
    <li>reduce - <b>Big O(n)</b>
    <p>( এটায় Big O(n) কারণ একটি reduce এ কতগুলো ইনপুট আসবে সেটা আমরা জানি না। এখন সেটা অনেক বড় কোনো ইনপুট হতে পারে আবার ছোটও হতে পারে তার জন্যই এটা Big O(n) )</p>
    </li>
    
</ul>

<h2>Recursion </h2>
> Recursion বিষয়টি হচ্ছে কোনো একটা প্রবলেমকে ভেঙ্গে ভেঙ্গে করাকে বুঝায়। Recursion এর মাধ্যমে আমরা কোনো একটা প্রবলেম normal way তে যেভাবে করে যেমন output পাই ঠিক তেমনি output পাবো Recursion way তে করার মাধ্যমে শুধু পরিবর্তনটি হবে আমরা যখন Recursion way তে কোড করবো তখন আমরা ধাপে ধাপে একটা প্রবলেম সল্ভ করবো।

</br>

<h1>Searching Algorithms</h1>

<h2>Linear Search</h2>
> Lineasr Search বিষয়টি হচ্ছে কোনো একটা স্পেসিফিক জায়গা থেকে কোনো একটা জিনিস খুজে দিবে এবং খুজে দেয়ার পর সেখান থেকে চলে আসবে। তার মানে হচ্ছে আমরা বলে দিবো যে এই জায়গা থেকে আমাকে তুমি এই জিনিসটা এনে দাও linear search বিষয়টি হচ্ছে এইরকম।

<h2>Binary Search</h2>
> binary search আমাদের টাইম কমপ্লেক্সিটি অনেক কমিয়ে দেয় এবং আমরা যে এলিমেন্ট খুজতে চাচ্ছি সেটা খুব সহজে বের করতে পারি। binary search করতে হলে আমাদের আগে আমাদের যে array টি থাকবে সেটাকে ascending order এ সাজাতে হবে এবং পরে সেটার উপর সার্চ করতে পারবো।

</br>

<p>তাহলে চলেন নিচের ইমেজের মাধ্যমে আরো ভালোভাবে বুঝার চেষ্টা করি।</p>
</br>
<img src="https://scaler.com/topics/images/binary-search2.webp" alt="example image">

> binary search এ আমরা তিনটি পয়েন্ট করি প্রথমে এবং সেই পয়েন্ট অনুসারে আমাদের যেই এলিমেন্ট খুজছি সেটা পাবো।

পয়েন্ট গুলো হচ্ছে,

<ol>
<li>Start Point</li>
<li>Middle Point</li>
<li>End Point</li>
</ol>

> উপরের তিনটি পয়েন্টের মাধ্যমে আমরা খুব কম সময়ের মধ্যে আমদের যেই এলিমেন্ট খুজছি সেটা খুজে পাবো।

এখানে প্রসেসটি হচ্ছে এইরকম, আমরা প্রথমে সিলেক্ট করবো যে আমাদের start point কোনটি তারপর সিলেক্ট করবো আমাদের middle point কোনটি এবং শেষে সিলেক্ট করবো আমাদের end point কোনটি। এইগুলো সিলেক্ট হয়ে গেলে আমরা কন্ডিশন এর মাধ্যমে খুজে দেখবো যে আমাদের কাংক্ষিত এলিমেন্ট কি middle এর চেয়ে বড় নাকি ছোট ? যদি বড় হয় তাহলে আমরা সেই middle এলিমেন্ট এর পরের সব এলিমেন্ট বাদ দিয়ে দিবো কারণ আমাদের array টি তো ascending order এ সাজানো তাই না ? এবং যেহেতু আমাদের কাংক্ষিত এলিমেন্টটি middle এলিমেন্ট এর চেয়ে ছোট তাই আমরা middle এর আগের সব এলিমেন্ট এর উপর এখন search চালাবো এবং আমরা আমাদের start, middle, end point গুলো পরিবর্তন করে ফেলবো এভাবে যে আমাদের আগের middle point যেটা ছিলো সেটা হবে এখন end point এবং যেহেতু আমরা শেষের গুলো বাদ দিয়ে প্রথম দিকের এলিমেন্ট গুলোর উপর search করছি তাই আমদের আর start point পরিবর্তন করতে হবে না তাই middle point and end point পরিবর্তন করবো।
এবং ওইখানে দেখবো যে এখন যেটা middle এলিমেন্ট আছে সেটা কি আমাদের কাংক্ষিত এলিমেন্ট এর চেয়ে ছোট নাকি বড় ছোট হলে তো আগের মতই পরিবর্তন করবো আর বড় হলে ও এবং যদি মিলে যায় তাহলে তো আমাদের output পেয়ে যাচ্ছি ( so now you can chill মজা করলাম )।

> মুলত এইভাবেই binary search করা হয়। আর picture তো যুক্ত করে দিলামই যাতে আপনারা নিজে আর ভালো বুঝতে পারেন আমার বুঝানোর চেয়ে।

<h1>Sorting Algorithms</h1>
> sorting slgorithms হচ্ছে কোনো একটা array কে ascending order এ কিংবা descending order এ সাজানোর জন্য ( ছোট থেকে বড় কিংবা বড় থেকে ছোট )। আমরা এই sorting algorithms এর মধ্যে অনেকগুলো algorithms পাই জেগুলো ব্যবহার করে খুব সহজে যেকোনো array sort করতে পারবো। নিচে কিছু দেয়া হলো,
<h2>Bubble Sort</h2>
> bubble sort এর মাধ্যমে আমরা একটি array এর ২টি value নিয়ে নিয়ে তাদের মধ্যে compare করে দেখবো যে প্রথম value এর চেয়ে দ্বিতীয় value বড় নাকি ছোট যদি বড় হয় তাহলে আমরা swape করবো value গুলোকে, যেমন আমাদের প্রথম value বড় হলো দ্বিতীয় value এর চেয়ে তাহলে তো আমরা বুঝতে পারছি যে আমাদের ডান পাশের value টি হচ্ছে ছোট value এবং তাকে বাম পাশে আনতে হবে এবং বাম পাশের value কে ডান পাশে দিতে হবে। এভাবেই চেক করে করে আমরা bubble sorting করবো। এবং আরেকটা কথা হচ্ছে আমরা যখন সর্বশেষ লাস্ট বড় এলিমেন্ট পেয়ে যাব তখন দ্বিতীয় বার আর ওই লাস্ট এলিমেন্টকে বাম পাশের এলিমেন্ট দ্বারা চেক করবো না এবং এভাবেই চেকিং হবে।

> নিচে কয়েকটি স্টেপের মাধ্যমে আর ক্লিয়ার করার চেষ্টা করেছি

</br>
<img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-0.png">
</br>
<img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-1.png">
</br>
<img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-2.png">

</br>
<img src="https://www.programiz.com/sites/tutorial2program/files/Bubble-sort-3.png">

> আমি একটা ওয়েবসাইটের লিংক দিচ্ছি যেটাতে গেলে আপনি একটি ভিডিওর মাধ্যমে আরো ভাবে বুঝতে পারবেন যে operation টি হচ্ছে কেমনে।

https://visualgo.net/en/sorting

<h2>Selection Sort</h2>
> Selection Sort বিষয়টি হচ্ছে একদম bubble sort এর মতই শুধু পরিবর্তনটি হচ্ছে আমরা bubble sorting এ তিনটি পয়েন্ট ধরতাম এবং সেগুলো দিয়ে array টি sort করতাম, কিন্তু selection sorting এ আমরা শুধুমাত্র একটি পয়েন্ট ধরবো যেটা হচ্ছে একটা lowest number এবং আমরা চেক করবো যে আমাদের lowest number কি তার পাশের number এর চেয়ে বড় ? যদি বড় হয় তাহলে তো আমাদের পাশের number টিকে lowest number এর ইনডেক্সে আনতে হবে কেননা ওই পাশের number টাই তো ছোট number এবং সেটা lowest number এর জায়গায় আসলে তবেই তো sorting টি হবে ছোট থেকে বড় হয়ে। এবং সংখ্যাটিকে আনার জন্য তো আমাদের swape করতে হবে তাই না ? আমরা swape করবো টিক যেভাবে bubble sort এ swape করেছিলাম ঠিক ওইভাবে।

> আপনাদের বুঝার জন্য নিচে picture যুক্ত করেছি এবং একটি video ও যুক্ত করে দিয়েছি যাতে আপানারা খুব সহজে বিষয়টি বুঝতে পারেন।

</br>
<img src="https://scaler.com/topics/images/selection-sort-example.webp">

</br>
video link - https://visualgo.net/en/sorting

<h2>Insertion Sort</h2>
> Insertion Sort ঠিক selection sort এর মতই কিন্তু এখানে পরিবর্তনটি হচ্ছে, আমরা selection sorting এ বাম পাশের number এর সাথে ডান পাশের number এর ছোট এবং বড় কি না সেটা চেক করতাম। কিন্তু insertion sorting এ আমরা একই ভাবে ডান পাশের টার সাথে ছোট বড় চেক করবো কিন্তু যদি ডান পাশের number টি বাম পাশের number এত ছোট হয় যে সেটাকে আমার আর ২ ইনডেক্স সামনে আনার প্রয়োজন হচ্ছে তখন insertion sort এ backword cheking করা হয় এবং ওই number এর সঠিক পজিশনে পৌঁচে দেওয়া হয়। এবং insetion sorting এ আমরা এইভাবে চেকিং করতে করতে সামনের দিকে এগুতে থাকি আর এইরকম পরিস্তিতির সম্মুখীন হলে backword checking এর মাধ্যমে ওই number টির সঠিক পজিশনে নেয়া হয়।

> আপনাদের বুঝার জন্য নিচে picture যুক্ত করেছি এবং একটি video ও যুক্ত করে দিয়েছি যাতে আপানারা খুব সহজে বিষয়টি বুঝতে পারেন।

</br>
<img src="https://www.boardinfinity.com/blog/content/images/2022/11/Your-paragraph-text--1-.jpg">

</br>
video link - https://visualgo.net/en/sorting

</br>
<h1>Data Structure </h1>
</br>
